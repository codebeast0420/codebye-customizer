import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import imageCompression from 'browser-image-compression';
import { client, URL } from '../../../lib/env';
import { Close, Bookmark, Check } from '../../../assets';
import ClickableDiv from '../ClickableDiv';
import UTIL from '../../../lib/util';
import { setSavedAction } from '../../../store/actions';
import Pricing from '../../../lib/pricing';

class SaveDesignModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      saving: '',
    };
  }

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('save-design-modal--open');
    } else {
      document.body.classList.remove('save-design-modal--open');
    }
  }

  handleClick = async (source) => {
    const {
      product, configuration, imageFunc, productParts, queryString, preMadeProduct,
    } = this.props;
    const { name } = this.state;
    await imageCompression.getFilefromDataUrl(imageFunc())
      .then(async (file) => {
        const options = {
          maxWidthOrHeight: 600,
        };
        await imageCompression(file, options).then(async (fileOpt) => {
          await imageCompression.getDataUrlFromFile(fileOpt).then(async (fileStr) => {
            await client.post('v1/save-share', {
              source,
              image: fileStr.split(',')[1],
              user_id: UTIL.getCookie('cbeuid'),
              name,
              options: {
                preMadeProduct,
                product: product.data.id,
                configuration,
                parts: Pricing.priceCalc(product.data.id, productParts.data, configuration).parts,
                shop: {
                  ...queryString,
                  on_shop: false,
                },
              },
            })
              .then((response) => {
                this.response = response.data;
                window.dataLayer = window.dataLayer || [];
                const dataLayerArgs = {
                  event: 'save-design',
                  save_value: Pricing.priceCalc(product.data.id, productParts.data, configuration).price,
                  save_bundle_names: product.data.name,
                  save_currency: product.data.currencies.currency_descriptor,
                };
                window.dataLayer.push(dataLayerArgs);
              })
              .catch((error) => {
                this.error = error.message;
              });
          }).catch(e => console.log(1, e.message));
        }).catch(e => console.log(2, e.message));
      }).catch(e => console.log(3, e.message));
  }

  render() {
    const { onClose, saved, dispatchSetSaved } = this.props;
    const { name, saving } = this.state;
    return (
      <Modal
        {...this.props}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          overlay: 'save-design-modal__overlay',
          modal: 'save-design-modal__container',
          transitionEnter: 'save-design-modal--enter',
          transitionEnterActive: 'save-design-modal--enter-active',
          transitionExit: 'save-design-modal--exit',
          transitionExitActive: 'save-design-modal--exit-active',
        }}
      >
        <div className="save-design">
          <div className="save-design__close">
            <Button
              className="save-design__close__button"
              onClick={onClose}
            >
              <Close />
            </Button>
          </div>
          <div className="save-design__content">
            <div className="save-design__content__wrapper">
              <input
                className="save-design__content__input"
                placeholder="Name your design"
                value={name}
                disabled={saved}
                onChange={(e) => {
                  if (e.target.value.length <= 30) {
                    this.setState({ name: e.target.value });
                  }
                }}
              />
              <div className="save-design__content__max-chars">
                30 characters maximum
              </div>
              {(!saved && (
                <ClickableDiv
                  className="save-design__content__button"
                  beforeClick={() => this.setState({ saving: true })}
                  onClick={() => this.handleClick(UTIL.getCookie('cbeuid') ? 'saved' : 'to_be_saved')}
                  afterClick={() => {
                    if (!UTIL.getCookie('cbeuid')) {
                      window.location.href = `${URL}my-account?save=${this.response.hash}`;
                    } else {
                      dispatchSetSaved(true);
                      this.setState({ saving: false });
                    }
                  }}
                  disabled={saving || name.length === 0}
                >
                  <div className="save-design__content__button__content">
                    <div className="save-design__content__button__title">
                      Save my design
                    </div>
                    <div className="save-design__content__button__icon">
                      {(saving && <FontAwesomeIcon icon={faCircleNotch} className="social-link" spin />) || <Bookmark />}
                    </div>
                  </div>
                </ClickableDiv>
              ))
                || (
                  <div className="save-design__content__success">
                    <div className="save-design__content__success__content">
                      <div className="save-design__content__success__title">
                        Design saved
                        {' '}
                        <Check />
                      </div>
                      <div className="save-design__content__success__subtitle">
                        You can consult it later on
                        {' '}
                        <a href={`${URL}my-account/saved-designs/`} target="_blank" rel="noopener noreferrer">your account</a>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

SaveDesignModal.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  configuration: PropTypes.instanceOf(Object).isRequired,
  dispatchSetSaved: PropTypes.instanceOf(Object).isRequired,
  saved: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  productParts: PropTypes.instanceOf(Object).isRequired,
  imageFunc: PropTypes.func.isRequired,
  queryString: PropTypes.instanceOf(Object).isRequired,
  preMadeProduct: PropTypes.instanceOf(Object).isRequired,
};


const mapStateToProps = state => ({
  product: state.product,
  configuration: state.configuration,
  saved: state.saved,
  imageFunc: state.imageFunc,
  productParts: state.productParts,
  queryString: state.queryString,
  preMadeProduct: state.preMadeProduct,
});

const mapDispatchToProps = {
  dispatchSetSaved: setSavedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveDesignModal);
