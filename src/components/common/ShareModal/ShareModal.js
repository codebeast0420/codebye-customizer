/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp, faFacebookF, faTwitter, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope, faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import imageCompression from 'browser-image-compression';
import { Close, CopyLink } from '../../../assets';
import { client, URL } from '../../../lib/env';
import ClickableDiv from '../ClickableDiv';
import Toast from '../Toast';
import Clipboard from '../../../lib/Clipboard';
import Pricing from '../../../lib/pricing';


class ShareModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    configuration: PropTypes.instanceOf(Object).isRequired,
    productParts: PropTypes.instanceOf(Object).isRequired,
    imageFunc: PropTypes.func.isRequired,
    preMadeProduct: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      spin: false,
    };
    this.response = {};
  }

  componentDidMount() {
    this.setState({ spin: true });
  }

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('share-modal--open');
    } else {
      document.body.classList.remove('share-modal--open');
    }
  }

  onEntered() {
    this.response = {};
    const {
      product, configuration, productParts, imageFunc, preMadeProduct,
    } = this.props;
    imageCompression.getFilefromDataUrl(imageFunc())
      .then(async (file) => {
        const options = {
          maxWidthOrHeight: 600,
        };
        window.dataLayer = window.dataLayer || [];
        const dataLayerArgs = {
          event: 'share-design',
          share_value: Pricing.priceCalc(product.data.id, productParts.data, configuration).price,
          share_bundle_names: product.data.name,
          share_currency: product.data.currencies.currency_descriptor,
        };
        window.dataLayer.push(dataLayerArgs);
        await imageCompression(file, options).then(async (fileOpt) => {
          await imageCompression.getDataUrlFromFile(fileOpt).then(async (fileStr) => {
            await client.post('v1/save-share', {
              source: 'share-design',
              image: fileStr.split(',')[1],
              options: {
                product: product.data.id,
                configuration,
                parts: Pricing.priceCalc(product.data.id, productParts.data, configuration).parts,
                preMadeProduct,
              },
            })
              .then((response) => {
                console.table(response);
                this.response = response.data;
                if (preMadeProduct.isPremade) {
                  this.response.link = `${URL}customiser/s_product/${preMadeProduct.id}`;
                }
                this.setState({ spin: false });
              })
              .catch((error) => {
                this.error = error.message;
              });
          }).catch(e => console.log(1, e.message));
        }).catch(e => console.log(2, e.message));
      }).catch(e => console.log(3, e.message));
  }

  handleClick = async (source) => {
    const {
      product, configuration, imageFunc, productParts, preMadeProduct,
    } = this.props;
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
              options: {
                preMadeProduct,
                product: product.data.id,
                configuration,
                parts: Pricing.priceCalc(product.data.id, productParts.data, configuration).parts,
              },
            })
              .then((response) => {
                this.response = response.data;
                if (preMadeProduct.isPremade) {
                  this.response.link = `${URL}customiser/s_product/${preMadeProduct.id}`;
                }
              })
              .catch((error) => {
                this.error = error.message;
              });
          }).catch(e => console.log(1, e.message));
        }).catch(e => console.log(2, e.message));
      }).catch(e => console.log(3, e.message));
  }

  render() {
    const { onClose } = this.props;
    const {
      spin,
    } = this.state;
    return (
      <Modal
        {...this.props}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          overlay: 'share-modal__overlay',
          modal: 'share-modal__container',
          transitionEnter: 'share-modal--enter',
          transitionEnterActive: 'share-modal--enter-active',
          transitionExit: 'share-modal--exit',
          transitionExitActive: 'share-modal--exit-active',
        }}
        onEntered={() => {
          document.getElementsByClassName('share-modal__overlay')[0].classList.add('entered');
          this.onEntered();
        }}
        onExited={() => this.setState({ spin: true })}
      >
        <div className="share">
          <Button
            className="share--close"
            onClick={() => {
              onClose();
              document.getElementsByClassName('share-modal__overlay')[0].classList.remove('entered');
            }}
          >
            <Close />
          </Button>
          <div className="share__title">
            Share this design
          </div>
          <div className="share__content">
            <div className="share__content__wrapper">
              <ClickableDiv
                className="share__content__method"
                onClick={() => {
                  window.open(`https://api.whatsapp.com/send?text=${this.response.link}`, 'whatsapp', '_blank');
                }}
                disabled={spin}
              >
                <div className="share__content__method__icon">
                  <FontAwesomeIcon icon={spin ? faCircleNotch : faWhatsapp} className="social-link" spin={spin} />
                </div>
                <div className="share__content__method__name">Whatsapp</div>
              </ClickableDiv>
            </div>
            <div className="share__content__wrapper">
              <ClickableDiv
                className="share__content__method"
                onClick={() => {
                  window.open(`https://www.facebook.com/sharer/sharer.php?u=${this.response.link}`, 'fbShareWindow', 'height=250, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                }}
                disabled={spin}
              >
                <div className="share__content__method__icon">
                  <FontAwesomeIcon icon={spin ? faCircleNotch : faFacebookF} className="social-link" spin={spin} />
                </div>
                <div className="share__content__method__name">Facebook</div>
              </ClickableDiv>
            </div>
            <div className="share__content__wrapper">
              <ClickableDiv
                className="share__content__method"
                onClick={() => {
                  window.open(`https://twitter.com/share?url=${this.response.link}`, 'twitterShareWindow', 'height=250, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
                }}
                disabled={spin}
              >
                <div className="share__content__method__icon">
                  <FontAwesomeIcon icon={spin ? faCircleNotch : faTwitter} className="social-link" spin={spin} />
                </div>
                <div className="share__content__method__name">Twitter</div>
              </ClickableDiv>
            </div>
            <div className="share__content__wrapper">
              <ClickableDiv
                className="share__content__method"
                onClick={() => {
                  window.open(`https://pinterest.com/pin/create/link/?url=${this.response.link}&media=${URL}image/${this.response.hash}&description=Check out my creation at Code by Edge.`, '_blank');
                }}
                disabled={spin}
              >
                <div className="share__content__method__icon">
                  <FontAwesomeIcon icon={spin ? faCircleNotch : faPinterestP} className="social-link" spin={spin} />
                </div>
                <div className="share__content__method__name">Pinterest</div>
              </ClickableDiv>
            </div>
            <div className="share__content__wrapper">
              <ClickableDiv
                className="share__content__method"
                onClick={() => {
                  window.location.href = `mailto:?subject=My creation | Code by Edge&body=${this.response.link}`;
                }}
                disabled={spin}
              >
                <div className="share__content__method__icon">
                  <FontAwesomeIcon icon={spin ? faCircleNotch : faEnvelope} className="social-link" spin={spin} />
                </div>
                <div className="share__content__method__name">Email</div>
              </ClickableDiv>
            </div>
            <div className="share__content__wrapper">
              <ClickableDiv
                className="share__content__method"
                onClick={() => Clipboard.copy(this.response.link)}
                afterClick={() => {
                  this.toast.show();
                }}
                disabled={spin}
              >
                <div className="share__content__method__icon">
                  {(spin && <FontAwesomeIcon icon={faCircleNotch} className="social-link" spin />) || <CopyLink />}
                </div>
                <div className="share__content__method__name">Copy link</div>
              </ClickableDiv>
            </div>
          </div>
          <Toast
            ref={(ref) => { this.toast = ref; }}
            message="Copied to clipboard"
            timeout={2000}
          />
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
  configuration: state.configuration,
  image: state.image,
  imageFunc: state.imageFunc,
  productParts: state.productParts,
  preMadeProduct: state.preMadeProduct,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShareModal);
