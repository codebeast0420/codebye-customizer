import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';
import { Close, Bookmark } from '../../../assets';
import ClickableDiv from '../ClickableDiv';
import { setSavedAction } from '../../../store/actions';
import { URL } from '../../../lib/env';

class NotSavedModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('not-saved-modal--open');
    } else {
      document.body.classList.remove('not-saved-modal--open');
    }
  }

  render() {
    const { onClose, close, preMadeProduct } = this.props;
    return (
      <Modal
        {...this.props}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          overlay: 'not-saved-modal__overlay',
          modal: 'not-saved-modal__container',
          transitionEnter: 'not-saved-modal--enter',
          transitionEnterActive: 'not-saved-modal--enter-active',
          transitionExit: 'not-saved-modal--exit',
          transitionExitActive: 'not-saved-modal--exit-active',
        }}
      >
        <div className="not-saved">
          <div className="not-saved__close">
            <Button
              className="not-saved__close__button"
              onClick={onClose}
            >
              <Close />
            </Button>
          </div>
          <div className="not-saved__content">
            <div className="not-saved__content__wrapper">
              <div className="not-saved__content__info">
                Are you sure you want to quit your design?
              </div>
              {!preMadeProduct.isPremade && (
                <>
                  <div className="not-saved__content__info">
                    If so, save your design before go back to website.
                  </div>
                  <ClickableDiv
                    className="not-saved__content__cta"
                    onClick={close}
                  >
                    <div className="not-saved__content__cta__content">
                      <div className="not-saved__content__cta__title">
                        Save my design
                      </div>
                      <div className="not-saved__content__cta__icon">
                        <Bookmark />
                      </div>
                    </div>
                  </ClickableDiv>
                </>
              )}
              <div className="not-saved__content__go-back">
                <a href={`${URL}shop-the-range`}>Go back to website</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

NotSavedModal.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  configuration: PropTypes.instanceOf(Object).isRequired,
  dispatchSetSaved: PropTypes.instanceOf(Object).isRequired,
  saved: PropTypes.bool.isRequired,
  preMadeProduct: PropTypes.instanceOf(Object).isRequired,
};


const mapStateToProps = state => ({
  product: state.product,
  configuration: state.configuration,
  saved: state.saved,
  preMadeProduct: state.preMadeProduct,
});

const mapDispatchToProps = {
  dispatchSetSaved: setSavedAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotSavedModal);
