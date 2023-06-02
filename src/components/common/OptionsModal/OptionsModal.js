import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';
import { Close } from '../../../assets';


class OptionsModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.instanceOf(Object).isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('options-modal--open');
    } else {
      document.body.classList.remove('options-modal--open');
    }
  }

  render() {
    const { children, onClose } = this.props;
    return (
      <Modal
        {...this.props}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          overlay: 'options-modal__overlay',
          modal: 'options-modal__container',
          transitionEnter: 'options-modal--enter',
          transitionEnterActive: 'options-modal--enter-active',
          transitionExit: 'options-modal--exit',
          transitionExitActive: 'options-modal--exit-active',
        }}
      >
        <div className="options">
          <div className="options__close">
            <Button
              className="options__close__button"
              onClick={onClose}
            >

              <Close />
            </Button>
          </div>
          {children}
        </div>
      </Modal>
    );
  }
}


export default OptionsModal;
