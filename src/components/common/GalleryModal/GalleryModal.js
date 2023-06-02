import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import Swiper from 'swiper';
import { Close, BigPrev, BigNext } from '../../../assets';
import ClickableDiv from '../ClickableDiv';

class GalleryModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    onClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('info-modal--open');
    } else {
      document.body.classList.remove('info-modal--open');
    }
  }

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      this.galleryTop = new Swiper('.gallery-modal__photos__top', {
        navigation: {
          nextEl: '.gallery-modal--next',
          prevEl: '.gallery-modal--prev',
        },
        thumbs: {
          swiper: {
            el: '.gallery-modal__photos__thumbs',
            freeMode: true,
            slidesPerView: 'auto',
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          },
        },
      });
    }
  }

  render() {
    const { product, onClose } = this.props;
    return (
      <Modal
        {...this.props}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          overlay: 'gallery-modal__overlay',
          modal: 'gallery-modal__container',
          transitionEnter: 'gallery-modal--enter',
          transitionEnterActive: 'gallery-modal--enter-active',
          transitionExit: 'gallery-modal--exit',
          transitionExitActive: 'gallery-modal--exit-active',
        }}
        onEntered={() => {
          document.getElementsByClassName('gallery-modal__overlay')[0].classList.add('entered');
        }}
      >
        <div className="gallery-modal__close">
          <ClickableDiv
            className="gallery-modal__close--button"
            onClick={() => {
              onClose();
              document.getElementsByClassName('gallery-modal__overlay')[0].classList.remove('entered');
            }}
          >
            <Close />
          </ClickableDiv>
        </div>
        <div className="gallery-modal__photos">
          <div className="gallery-modal__photos__title">Gallery</div>
          <div className="gallery-modal__photos__top">
            <div className="swiper-wrapper">
              {product.data.gallery.map(image => (
                <div
                  className="swiper-slide gallery-modal__photos--image"
                  key={Math.random() * 1000}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
          </div>
          <div className="gallery-modal__photos__thumbs">
            <div className="swiper-wrapper">
              {product.data.gallery.map(image => (
                <div
                  className="swiper-slide gallery-modal__photos--thumb"
                  key={Math.random() * 1000}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="gallery-modal--next">
          <BigNext />
        </div>
        <div className="gallery-modal--prev">
          <BigPrev />
        </div>
      </Modal>
    );
  }
}


const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryModal);
