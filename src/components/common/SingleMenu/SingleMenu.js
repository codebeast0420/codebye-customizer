import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import anime from 'animejs';
import _ from 'underscore';
import { CSSTransition } from 'react-transition-group';
import { AllHtmlEntities } from 'html-entities';
import Menus from './menus';
import MessageModal from '../MessageModal';
import { setProductConfigurationAction, setSavedAction, setDoneModalAction } from '../../../store/actions/ProductsActions';
import InfoModal from '../InfoModal';
import { Check, Arrow } from '../../../assets';
import ClickableDiv from '../ClickableDiv';
import Pricing from '../../../lib/pricing';


import { URL, client } from '../../../lib/env';
import imageCompression from 'browser-image-compression';

const entities = new AllHtmlEntities();

class SingleMenu extends React.Component {
  static propTypes = {
    finishAnime: PropTypes.func.isRequired,
    showLoading: PropTypes.func.isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    configuration: PropTypes.instanceOf(Object).isRequired,
    dispatchSetModal: PropTypes.func.isRequired,
    productParts: PropTypes.instanceOf(Object).isRequired,
    preMadeProduct: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      infoModal: false,
      menus: this.rebuildMenu(),
      title: '',
      standardMenu: true,
      menuActionsHeight: 40,
      addToCart: false,
    };
    this.middle = React.createRef();
  }

  componentDidMount() {
    const { finishAnime, showLoading } = this.props;
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      this.setState({ menuActionsHeight: 50 });
    }
    if (window.innerWidth >= 1024) {
      this.setState({ menuActionsHeight: 100 });
    }
    window.addEventListener('resize', this.updateDimensions);
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    showLoading(true);
    anime({
      targets: '.single__menu__middle__item',
      translateX: [window.innerWidth, '0'],
      delay: (el, i) => i * 50,
      easing: 'easeInOutQuad',
      duration: 800,
      complete: () => {
        finishAnime();
      },
    });
  }

  componentDidUpdate(prevPros) {
    const { configuration } = this.props;
    _.each(configuration, (each, k) => {
      let slug = '';
      switch (k) {
        case 'pa_material':
          slug = 'pa_material';
          break;
        case 'pa_stone':
          slug = 'pa_stone';
          break;
        case 'pa_stone_type':
          slug = 'pa_stone-type';
          break;
        case 'pa_size':
          slug = 'pa_size';
          break;
        case 'pa_hook_type_earrings':
          slug = 'pa_hook-type-earrings';
          break;
        default:
          slug = '';
      }
      if (prevPros.configuration[k].name !== each.name && each.name !== 'At your choice' && each.name !== 'Solid Color' && each.name !== 'Themes') {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ menus: this.rebuildMenu(slug) });
      }
    });
    if (prevPros.configuration.message !== configuration.message) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ menus: this.rebuildMenu() });
    }
    // && prevPros.configuration.pa_stone.id === 'solid_color'
    if (!_.isEqual(prevPros.configuration.pa_stone.choice, configuration.pa_stone.choice)
      && !configuration.pa_stone.selected_theme
      && prevPros.configuration.message === configuration.message) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ menus: this.rebuildMenu('solid_color') });
    }
    if (!_.isEqual(prevPros.configuration.pa_stone.choice, configuration.pa_stone.choice)
      && configuration.pa_stone.selected_theme
      && prevPros.configuration.message === configuration.message) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ menus: this.rebuildMenu('themes') });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const { menuActionsHeight } = this.state;
    const vh = window.innerHeight * 0.01;
    if (window.innerWidth < 768 && menuActionsHeight !== 40) {
      this.setState({ menuActionsHeight: 40, menus: this.rebuildMenu() });
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1024 && menuActionsHeight !== 50) {
      this.setState({ menuActionsHeight: 50, menus: this.rebuildMenu() });
    }
    if (window.innerWidth >= 1024 && menuActionsHeight !== 100) {
      this.setState({ menuActionsHeight: 100, menus: this.rebuildMenu() }, () => {
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  rebuildMenu = (type = false) => {
    const {
      product, configuration, productParts, preMadeProduct,
    } = this.props;
    const menus = new Menus(product.attributes, this, configuration, preMadeProduct);
    console.log('single menu product attribute', product.attributes);
    if (type === 'solid_color') {
      return menus.getSolidColorsSubMenu().map(value => (
        <div
          className={`single__menu__middle__item ${value.selected && 'single__menu__middle__item--selected'}`}
          key={value.id}
          onClick={value.onClick}
          role="button"
          onKeyUp={() => false}
          tabIndex={0}
        >
          <div className="single__menu__middle__item--content">
            <div className="single__menu__middle__item__color" style={{ backgroundColor: value.color }} />
            <div className="single__menu__middle__item__title">{value.name}</div>
          </div>
        </div>
      ));
    }
    if (type === 'themes') {
      return menus.getThemesColorsSubMenu().map((value) => {
        let gradient = 'linear-gradient(';
        _.each(value.colors, (color, index) => {
          if (index + 1 < value.colors.length) {
            gradient += `${color}, `;
          } else {
            gradient += color;
          }
        });
        gradient += ')';
        return (
          <div
            className={`single__menu__middle__item ${value.selected && 'single__menu__middle__item--selected'}`}
            key={value.id}
            onClick={value.onClick}
            role="button"
            onKeyUp={() => false}
            tabIndex={0}
          >
            <div className="single__menu__middle__item--content">
              <div className="single__menu__middle__item__color" style={{ backgroundImage: gradient }} />
              <div className="single__menu__middle__item__title">{value.name}</div>
            </div>
          </div>
        );
      });
    }
    if (type === 'at_your_choice') {
      let index = 0;
      return menus.getAtYourChoiceColorsMenu().map((value, i) => (
        <div
          className="single__menu__middle__item__choice"
          key={value.id}
          onClick={value.onClick}
          role="button"
          onKeyUp={() => false}
          tabIndex={0}
        >
          <div className="single__menu__middle__item__choice__wrapper">
            <div className="single__menu__middle__item__choice__letter">{value.letter}</div>
            <div className="single__menu__middle__item__choice__symbols">
              {!value.letter.trim().length && (
                <div key={Math.random() * 1000} className="single__menu__middle__item__choice__symbols__space">
                  <span className="hexagon">&#x2B22;</span>
                </div>
              )}
              {!!value.letter.trim().length && value.code.map((code) => {
                index += 1;
                return (
                  <div key={Math.random() * 1000} className="single__menu__middle__item__choice__symbols__symbol" id={`s${index}`}>
                    <div className="swiper-wrapper">
                      {code.colors.map(color => (
                        <div className="single__menu__middle__item__choice__stone swiper-slide" key={Math.random() * 1000}>
                          <div className={`single__menu__middle__item__choice__stone-color menu_${code.symbol}`} style={{ backgroundColor: color.color }} />
                          <div className="single__menu__middle__item__title">{color.name}</div>
                        </div>
                      ))}
                    </div>
                    {window.innerWidth >= 1024 && (
                      <>
                        <div className={`swiper-button-next s${index}`}><Arrow /></div>
                        <div className={`swiper-button-prev s${index}`}><Arrow /></div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          {menus.getAtYourChoiceColorsMenu()[i + 1]
            && !!menus.getAtYourChoiceColorsMenu()[i + 1].letter.trim().length
            && !!value.letter.trim().length && (
              <span key={Math.random() * 1000} className="single__menu__middle__item__choice__symbols__letter-divider" />
            )}
        </div>
      ));
    }
    if (type) {
      const { price } = Pricing.priceCalc(product.id, productParts.data, configuration);
      return menus.getSubMenu(type).map((value) => {
        let slug = type;
        if (slug === 'pa_stone-type') {
          slug = 'pa_stone_type';
        }
        if (slug === 'pa_hook-type-earrings') {
          slug = 'pa_hook_type_earrings';
        }
        const newConf = { ...configuration, [slug]: value };
        let newPrice = 0;
        if (value.id !== 'talk_to_us') {
          newPrice = Pricing.priceCalc(product.id, productParts.data, newConf).price - price;
        }
        if (type === 'pa_size' && (product.id === 83 || product.id === 2096)) {
          if (product.id === 83 && parseInt(value.name, 10) > Pricing.necklaceSize(productParts.data, configuration)) {
            return (
              <div
                className={`single__menu__middle__item ${value.selected && 'single__menu__middle__item--selected'}`}
                key={value.slug}
                onClick={value.onClick}
                role="button"
                onKeyUp={() => false}
                tabIndex={0}
              >
                <div className="single__menu__middle__item--content">
                  <span>{value.name}</span>
                  {value.id !== 'talk_to_us' && type !== 'pa_stone' && newPrice !== 0 && !preMadeProduct.isPremade && (
                    <span>{`${newPrice > 0 ? '+' : '-'} ${entities.decode(product.currencies.currency_symbol)}${Math.abs(newPrice.toFixed(2))}`}</span>
                  )}
                  {value.id !== 'talk_to_us' && type !== 'pa_stone' && newPrice === 0 && !preMadeProduct.isPremade && (
                    <span>―</span>
                  )}
                </div>
              </div>
            );
          }
          const conf = {
            ...configuration,
            pa_size: { ...configuration.pa_size, name: value.name, id: value.id }
          };
          if (product.id === 2096) {
            const tooBig = _.map(
              Pricing.mayfairBangleSize(productParts.data, conf),
              size => size > Pricing.mayfairBangleRingSize(productParts.data, conf),
            );
            if (!tooBig.some(item => item === true)) {
              return (
                <div
                  className={`single__menu__middle__item ${value.selected && 'single__menu__middle__item--selected'}`}
                  key={value.slug}
                  onClick={value.onClick}
                  role="button"
                  onKeyUp={() => false}
                  tabIndex={0}
                >
                  <div className="single__menu__middle__item--content">
                    <span>{value.name}</span>
                    {value.id !== 'talk_to_us' && type !== 'pa_stone' && newPrice !== 0 && !preMadeProduct.isPremade && (
                      <span>{`${newPrice > 0 ? '+' : '-'} ${entities.decode(product.currencies.currency_symbol)}${Math.abs(newPrice.toFixed(2))}`}</span>
                    )}
                    {value.id !== 'talk_to_us' && type !== 'pa_stone' && newPrice === 0 && !preMadeProduct.isPremade && (
                      <span>―</span>
                    )}
                  </div>
                </div>
              );
            }
            return (
              <div
                className="single__menu__middle__item disabled"
                key={value.slug}
              >
                <div className="single__menu__middle__item--content">
                  <span>{value.name}</span>
                  <span>Your message is too big for this size</span>
                </div>
              </div>
            );
          }
        }
        return (
          <div
            className={`single__menu__middle__item ${value.selected && 'single__menu__middle__item--selected'}`}
            key={value.slug}
            onClick={value.onClick}
            role="button"
            onKeyUp={() => false}
            tabIndex={0}
          >
            <div className="single__menu__middle__item--content">
              <span>{value.name}</span>
              {value.id !== 'talk_to_us' && type !== 'pa_stone' && newPrice !== 0 && !preMadeProduct.isPremade && (
                <span>{`${newPrice > 0 ? '+' : '-'} ${entities.decode(product.currencies.currency_symbol)}${Math.abs(newPrice.toFixed(2))}`}</span>
              )}
              {value.id !== 'talk_to_us' && type !== 'pa_stone' && newPrice === 0 && !preMadeProduct.isPremade && (
                <span>―</span>
              )}
            </div>
          </div>
        );
      });
    }
    return menus.getList().map(value => (
      <div
        className="single__menu__middle__item"
        key={value.slug}
        onClick={value.onClick}
        role="button"
        onKeyUp={() => false}
        tabIndex={0}
      >
        <div className="single__menu__middle__item--content">
          <span>{value.name}</span>
          <span>{value.subtitle}</span>
        </div>
      </div>
    ));
  };

  menuAnimation = (i = 0, translate = false, direction = 'bottom', menu = false) => {
    const { menuActionsHeight } = this.state;
    const a1 = anime.timeline({
      duration: 400,
      easing: 'easeInOutQuad',
    });
    if (translate) {
      a1.add({
        targets: '.single__menu__container',
        translateY: direction === 'bottom' ? [-menuActionsHeight, 0] : [0, -menuActionsHeight],
      });
    }
    a1.add({
      targets: ['.single__menu__middle__item', '.single__menu__middle__item__choice'],
      opacity: 0,
      delay: anime.stagger(200, { from: i }),
      complete: () => {
        this.setState({ menus: this.rebuildMenu(menu) });
        // this.slider.update();
        // this.slider.slideTo(0, 0);
        this.middle.current.scrollLeft = 0;
        anime({
          targets: ['.single__menu__middle__item', '.single__menu__middle__item__choice'],
          translateX: [window.innerWidth, 0],
          opacity: {
            value: 1,
            duration: 0,
          },
          delay: (el, index) => index * 50,
          easing: 'easeInOutQuad',
          duration: 800,
        });
      },
    }, '-=300');
  }

  modals = () => {
    const { product } = this.props;
    const { open, infoModal } = this.state;
    const message = () => (
      <MessageModal
        {...this.props}
        isOpen={open}
        onClose={() => {
          this.setState({ open: false });
        }}
        product={product}
        close={() => this.setState({ open: false })}
      />
    );

    const info = () => (
      <InfoModal
        {...this.props}
        open={infoModal}
        onClose={() => {
          this.setState({ infoModal: false });
        }}
      />
    );

    return (
      <>
        {message()}
        {info()}
      </>
    );
  }

  handleClick = async () => {
    const {
      product, configuration, imageFunc, productParts, queryString, preMadeProduct,
    } = this.props;
    await imageCompression.getFilefromDataUrl(imageFunc())
      .then(async (file) => {
        const options = {
          maxWidthOrHeight: 600,
        };
        await imageCompression(file, options).then(async (fileOpt) => {
          await imageCompression.getDataUrlFromFile(fileOpt).then(async (fileStr) => {
            await client.post('v1/save-share', {
              source: !queryString.retailer || queryString.retailer.id === undefined ? 'add-to-cart' : 'to-add-to-cart',
              image: fileStr.split(',')[1],
              options: {
                preMadeProduct,
                product: product.id,
                configuration,
                parts: Pricing.priceCalc(product.id, productParts.data, configuration).parts,
                shop: {
                  ...queryString,
                  on_shop: true,
                },
              },
            })
              .then(async (response) => {
                if (!queryString.retailer || queryString.retailer.id === undefined) {
                  let params = {
                    'add-to-cart': product.id,
                    quantity: 1,
                    ...Pricing.priceCalc(product.id, productParts.data, configuration).parts,
                    message: configuration.message,
                    hash: response.data.hash,
                  };
                  if (preMadeProduct.isPremade) {
                    params = {
                      'add-to-cart': preMadeProduct.id,
                      quantity: 1,
                      message: preMadeProduct.message,
                      hash: response.data.hash,
                    };
                  }
                  await client.get(
                    URL,
                    {
                      params,
                    },
                  ).then((e) => {
                    window.dataLayer = window.dataLayer || [];
                    const dataLayerArgs =  {
                      event: 'add_to_cart',
                      ecommerce: {
                        items: [{
                          item_name: product.name,
                          item_id: product.id,
                          price: Pricing.priceCalc(product.id, productParts.data, configuration).price,
                          quantity: 1,
                        }],
                      }
                    }
                    window.dataLayer.push(dataLayerArgs);
                  });
                  /* await client.get(
                    `${URL}shop-the-range/`,
                    {
                      params,
                    },
                  ); */
                }
                this.response = response.data;
              })
              .catch((e) => {
                console.table(product.data.name);
                console.table(4, e.message);
              });
          }).catch(e => console.table(1, e.message));
        }).catch(e => console.table(2, e.message));
      }).catch(e => console.table(3, e.message));
  }

  render() {
    const {
      menus, title, standardMenu, menuActionsHeight, addToCart,
    } = this.state;

    const {
      dispatchSetModal, product, productParts, configuration, preMadeProduct, queryString,
    } = this.props;
    const priceCalc = Pricing.priceCalc(product.id, productParts.data, configuration);
    if (preMadeProduct.isPremade) {
      priceCalc.price = preMadeProduct.price;
    }
    return (
      <>
        {this.modals()}
        <div className="single__menu">
          <div className="single__menu__container" style={{ transform: `translateY(-${menuActionsHeight}px)` }}>
            <div className="single__menu__top">
              <CSSTransition
                timeout={0}
                classNames="single__menu__top__regular"
                in={standardMenu}
              >
                <div className="single__menu__top__regular">
                  <div className="single__menu__top__title">
                    {title}
                  </div>
                    {title == 'Size' ? (
                      <div>
                        <a className="size-guide-link" href="https://codebyedge.com/size-guide/" target="_blank">View Size Guide</a>
                      </div>
                      
                    ): null}
                  <div className="single__menu__top__link">
                    <Button
                      as="a"
                      href="#"
                      variant="link"
                      bsPrefix="a"
                      onClick={() => { this.menuAnimation(0, true, 'top'); }}
                    >
                      <Check />
                    </Button>
                  </div>
                </div>
              </CSSTransition>
              <CSSTransition
                timeout={0}
                classNames="single__menu__top__colors"
                in={!standardMenu}
              >
                <div className="single__menu__top__colors">
                  <div className="single__menu__top__title">
                    {title}
                  </div>
                  <div className="single__menu__top__link">
                    <Button
                      as="a"
                      href="#"
                      variant="link"
                      bsPrefix="a"
                      onClick={() => { this.menuAnimation(0, false, 'bottom', 'pa_stone'); this.setState({ standardMenu: true, title: 'Colors' }); }}
                    >
                      <Check />
                    </Button>
                  </div>
                </div>
              </CSSTransition>
            </div>
            {/* </div> */}
            <div className="single__menu__middle" ref={this.middle}>
              {menus}
            </div>
            <div className="single__menu__bottom">
              <div className="single__menu__bottom__price">
                {`${entities.decode(product.currencies.currency_symbol)}${priceCalc.price}`}
              </div>
              <div className="single__menu__bottom__done">
                <ClickableDiv
                  beforeClick={() => {
                    this.setState({ addToCart: true });
                  }}
                  onClick={async () => {
                    await this.handleClick();
                  }}
                  afterClick={() => {
                    if (!queryString.retailer || queryString.retailer.id === undefined) {
                      window.location.href = `${URL}cart`;
                    } else {
                      window.location.href = `${URL}retail-checkout?hash=${this.response.hash}`;
                    }
                    this.setState({ addToCart: false });
                  }}
                  disabled={addToCart}
                  // onClick={() => dispatchSetModal(true)}
                  className="single__menu__bottom__done__link"
                >
                  <>Purchase my design</>
                </ClickableDiv>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  configuration: state.configuration,
  productParts: state.productParts,
  themes: state.themes,
  preMadeProduct: state.preMadeProduct,
  imageFunc: state.imageFunc,
  queryString: state.queryString,
});

const mapDispatchToProps = {
  dispatchSetConfiguration: setProductConfigurationAction,
  dispatchSetSaved: setSavedAction,
  dispatchSetModal: setDoneModalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMenu);
