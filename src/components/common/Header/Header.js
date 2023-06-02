import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as QS from 'query-string';
import {
  faAngleDoubleRight,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import imageCompression from 'browser-image-compression';
import {
  Logo, Back, Close, Dots, Ring, Share, Bookmark, Message, Bag,
} from '../../../assets';
import OptionsModal from '../OptionsModal';
import InfoModal from '../InfoModal';
import ShareModal from '../ShareModal';
import SaveDesignModal from '../SaveDesignModal';
import { URL, client } from '../../../lib/env';
import NotSavedModal from '../NotSavedModal';
import DoneModal from '../DoneModal';
import {
  setDoneModalAction, changingProductAction, setProductAction, setProductConfigurationAction,
} from '../../../store/actions';
import ClickableDiv from '../ClickableDiv';
import Pricing from '../../../lib/pricing';

class Header extends React.PureComponent {
  static propTypes = {
    onBack: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.string]),
    onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.string]),
    location: PropTypes.instanceOf(Object).isRequired,
    saved: PropTypes.bool.isRequired,
    onProd: PropTypes.bool,
    modal: PropTypes.bool.isRequired,
    dispatchSetModal: PropTypes.func.isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    configuration: PropTypes.instanceOf(Object).isRequired,
    changingProduct: PropTypes.oneOfType([PropTypes.bool, PropTypes.instanceOf(Object)]).isRequired,
    dispatchSetConfiguration: PropTypes.func.isRequired,
    dispatchChangeProduct: PropTypes.func.isRequired,
    dispatchSetProduct: PropTypes.func.isRequired,
    productParts: PropTypes.instanceOf(Object).isRequired,
    imageFunc: PropTypes.func.isRequired,
    queryString: PropTypes.instanceOf(Object).isRequired,
    preMadeProduct: PropTypes.instanceOf(Object).isRequired,
  }

  static defaultProps = {
    onBack: false,
    onClose: false,
    onProd: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      options: false,
      info: false,
      share: false,
      saveDesign: false,
      notSaved: false,
      fromNotSaved: false,
      addToCart: false,
      fromDone: false,
    };
  }


  componentDidMount() {
    const { location } = this.props;

    const query = QS.parse(location.search);
    if (query.r) {
      this.setCookie('affiliate_cookie', query.r, 30);
    }
  }

  setCookie = (cName, value, exdays) => {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    const cValue = escape(value) + ((exdays == null) ? '' : `; expires=${exdate.toUTCString()}`);
    document.cookie = `${cName}=${cValue}`;
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
                product: product.data.id,
                configuration,
                parts: Pricing.priceCalc(product.data.id, productParts.data, configuration).parts,
                shop: {
                  ...queryString,
                  on_shop: true,
                },
              },
            })
              .then(async (response) => {
                if (!queryString.retailer || queryString.retailer.id === undefined) {
                  let params = {
                    'add-to-cart': product.data.id,
                    quantity: 1,
                    ...Pricing.priceCalc(product.data.id, productParts.data, configuration).parts,
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
                  ).then(() => {
                    window.dataLayer = window.dataLayer || [];
                    const dataLayerArgs = {
                      event: 'add-to-cart',
                      cart_value: Pricing.priceCalc(product.data.id, productParts.data, configuration).price,
                      cart_bundle_names: product.data.name,
                      cart_currency: product.data.currencies.currency_descriptor,
                    };
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
                console.log(product.data.name);
                console.log(4, e.message);
              });
          }).catch(e => console.log(1, e.message));
        }).catch(e => console.log(2, e.message));
      }).catch(e => console.log(3, e.message));
  }

  modals = () => {
    const optionsModal = () => {
      const { options } = this.state;
      const { preMadeProduct } = this.props;
      return (
        <OptionsModal
          {...this.props}
          open={options}
          onClose={() => {
            this.setState({ options: false });
          }}
        >
          <div className="options__content">
            <div className="options__content__menu">
              {/*
              Velha lógica que gurdava o estado do produto para aplicar no novo produto
              escolhido quando possível.
              Foi deixado como comentário para o caso de mais tarde ser preciso reverter.
              <Link
                className="options__content__menu__item"
                to="/"
                onClick={() => {
                  const {
                    configuration, dispatchChangeProduct, changingProduct, product, productParts,
                  } = this.props;
                  if (!changingProduct) {
                    dispatchChangeProduct({ product, configuration, productParts });
                  }
                  this.setState({ options: false });
                }}
              >
                <div className="options__content__menu__item__title">Change Product</div>
                <div className="options__content__menu__item__icon"><Ring /></div>
              </Link> */}
              <Button as="a" href={`${URL}shop-the-range`} variant="link" bsPrefix="a" className="options__content__menu__item">
                <div className="options__content__menu__item__title">Change Product</div>
                <div className="options__content__menu__item__icon"><Ring /></div>
              </Button>
              <div
                className="options__content__menu__item"
                onClick={() => {
                  this.setState({ options: false, share: true, fromDone: false });
                }}
                onKeyUp={() => false}
                role="button"
                tabIndex={0}
              >
                <div className="options__content__menu__item__title">Share with a friend</div>
                <div className="options__content__menu__item__icon"><Share /></div>
              </div>
              {!preMadeProduct.isPremade && (
                <div
                  className="options__content__menu__item"
                  onClick={() => this.setState({ options: false, saveDesign: true, fromDone: false })}
                  onKeyUp={() => false}
                  role="button"
                  tabIndex={0}
                >
                  <div className="options__content__menu__item__title">Save your design</div>
                  <div className="options__content__menu__item__icon"><Bookmark /></div>
                </div>
              )}
              <div
                className="options__content__menu__item"
                onClick={() => this.setState({ info: true, options: false, fromDone: false })}
                onKeyUp={() => false}
                role="button"
                tabIndex={0}
              >
                <div className="options__content__menu__item__title">Talk to us</div>
                <div className="options__content__menu__item__icon"><Message /></div>
              </div>
            </div>
          </div>
        </OptionsModal>
      );
    };

    const infoModal = () => {
      const { info, fromDone } = this.state;
      const { dispatchSetModal } = this.props;
      return (
        <InfoModal
          open={info}
          onClose={() => {
            if (fromDone) {
              dispatchSetModal(true);
              this.setState({ info: false });
            } else {
              this.setState({ info: false, options: true });
            }
          }}
        />
      );
    };

    const shareModal = () => {
      const { share, fromDone } = this.state;
      const { dispatchSetModal } = this.props;
      return (
        <ShareModal
          {...this.props}
          open={share}
          onClose={() => {
            if (fromDone) {
              dispatchSetModal(true);
              this.setState({ share: false });
            } else {
              this.setState({ share: false, options: true });
            }
          }}
        />
      );
    };

    const saveDesignModal = () => {
      const { saveDesign, fromNotSaved, fromDone } = this.state;
      const { dispatchSetModal } = this.props;
      return (
        <SaveDesignModal
          {...this.props}
          open={saveDesign}
          onClose={() => {
            if (fromDone) {
              dispatchSetModal(true);
              this.setState({ saveDesign: false });
            } else {
              this.setState({
                saveDesign: false, options: !fromNotSaved, fromNotSaved: false,
              });
            }
          }}
        />
      );
    };

    const notSavedModal = () => {
      const { notSaved } = this.state;
      return (
        <NotSavedModal
          {...this.props}
          open={notSaved}
          close={() => this.setState({
            notSaved: false, saveDesign: true, fromNotSaved: true, fromDone: false,
          })}
          onClose={() => this.setState({ notSaved: false })}
        />
      );
    };

    const doneModal = () => {
      const { modal, dispatchSetModal, queryString, preMadeProduct } = this.props;
      const { addToCart } = this.state;
      return (
        <DoneModal
          {...this.props}
          open={modal}
          onClose={() => dispatchSetModal(false)}
        >
          <div className="done__content">
            <div className="done__content__menu">
              <div
                className="done__content__menu__item"
                onClick={() => {
                  dispatchSetModal(false);
                  this.setState({ share: true, fromDone: true });
                }}
                onKeyUp={() => false}
                role="button"
                tabIndex={0}
              >
                <div className="done__content__menu__item__title">Share with a friend</div>
                <div className="done__content__menu__item__icon"><Share /></div>
              </div>
              {!preMadeProduct.isPremade && (
                <div
                  className="done__content__menu__item"
                  onClick={() => {
                    dispatchSetModal(false);
                    this.setState({ saveDesign: true, fromDone: true });
                  }}
                  onKeyUp={() => false}
                  role="button"
                  tabIndex={0}
                >
                  <div className="done__content__menu__item__title">Save your design</div>
                  <div className="done__content__menu__item__icon"><Bookmark /></div>
                </div>
              )}
              <div
                className="done__content__menu__item"
                onClick={() => {
                  dispatchSetModal(false);
                  this.setState({ info: true, fromDone: true });
                }}
                onKeyUp={() => false}
                role="button"
                tabIndex={0}
              >
                <div className="done__content__menu__item__title">Talk to us</div>
                <div className="done__content__menu__item__icon"><Message /></div>
              </div>
              <ClickableDiv
                className="save-design__content__button"
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
                }}
                disabled={addToCart}
              >
                <div className="save-design__content__button__content">
                  <div className="save-design__content__button__title">
                    Purchase my design
                  </div>
                  <div className="save-design__content__button__icon">
                    {(addToCart && <FontAwesomeIcon icon={faCircleNotch} className="social-link" spin />) || <Bag />}
                  </div>
                </div>
              </ClickableDiv>
            </div>
          </div>
        </DoneModal>
      );
    };

    return (
      <>
        {optionsModal()}
        {infoModal()}
        {shareModal()}
        {saveDesignModal()}
        {notSavedModal()}
        {doneModal()}
      </>
    );
  }

  render() {
    const {
      onBack, onClose, location: { pathname }, saved, onProd, queryString,
    } = this.props;
    return (
      <>
        {this.modals()}
        <Container className={`header ${pathname === '/product' && !onProd ? 'header-product' : ''}`}>
          <Row>
            <Col className="header__item">
              {pathname === '/product' && saved && !onProd && (
                <Button as="a" href={`${URL}shop-the-range`} variant="link" bsPrefix="a">
                  <Back />
                </Button>
              )}
              {/* {pathname === '/product' && !saved && !onProd && (
                <Button href="#!" onClick={() => this.setState({ notSaved: true })} variant="link" bsPrefix="a" as="a">
                  <Back />
                </Button>
              )} */}
              {onBack && typeof onBack === 'function' && (
                <div
                  className="header__button"
                  onClick={onBack}
                  onKeyUp={(key) => {
                    if (key.keyCode === 13) {
                      onBack();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <Back />
                </div>
              )}
              {onBack && typeof onBack === 'string' && (
                <Button as="a" href={onBack} variant="link" bsPrefix="a">
                  <Back />
                </Button>
              )}
            </Col>
            <Col className="header__item header__logo">
              {(!queryString.retailer || queryString.retailer.id === undefined) && (saved || pathname !== '/product') && (
                <Button as="a" href={`${URL}shop-the-range`} variant="link" bsPrefix="a">
                  <Logo />
                </Button>
              )}
              {(!queryString.retailer || queryString.retailer.id === undefined) && !saved && pathname === '/product' && (
                <Button href="#!" onClick={() => this.setState({ notSaved: true })} variant="link" bsPrefix="a" as="a">
                  <Logo />
                </Button>
              )}
            </Col>
            <Col className="header__item">
              {onClose && typeof onClose === 'function' && (
                <div
                  className="header__button"
                  onClick={onClose}
                  onKeyUp={(key) => {
                    if (key.keyCode === 13) {
                      onClose();
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <Close />
                </div>
              )}
              {onClose && typeof onClose === 'string' && pathname !== '/product' && (
                <Link
                  to={onClose}
                >
                  <Close />
                </Link>
              )}
              {pathname === '/product' && !onProd && (
                <div
                  className="header__button"
                  onClick={() => this.setState({ options: true })}
                  onKeyUp={() => { }}
                  role="button"
                  tabIndex={0}
                >
                  <Dots />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  saved: state.saved,
  modal: state.modal,
  product: state.product,
  productParts: state.productParts,
  configuration: state.configuration,
  imageFunc: state.imageFunc,
  changingProduct: state.changingProduct,
  queryString: state.queryString,
  preMadeProduct: state.preMadeProduct,
});

const mapDispatchToProps = {
  dispatchSetModal: setDoneModalAction,
  dispatchSetConfiguration: setProductConfigurationAction,
  dispatchChangeProduct: changingProductAction,
  dispatchSetProduct: setProductAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
