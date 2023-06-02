import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';
import { Close } from '../../../assets';


class DoneModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.instanceOf(Object).isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('done-modal--open');
    } else {
      document.body.classList.remove('done-modal--open');
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
          overlay: 'done-modal__overlay',
          modal: 'done-modal__container',
          transitionEnter: 'done-modal--enter',
          transitionEnterActive: 'done-modal--enter-active',
          transitionExit: 'done-modal--exit',
          transitionExitActive: 'done-modal--exit-active',
        }}
      >
        <div className="done">
          <div className="done__close">
            <Button
              className="done__close__button"
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


export default DoneModal;
