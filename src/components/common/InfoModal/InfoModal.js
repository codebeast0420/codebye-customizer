import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';
import { Button } from 'react-bootstrap';
import { Close } from '../../../assets';


class InfoModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    const { open } = this.props;
    if (open) {
      document.body.classList.add('info-modal--open');
    } else {
      document.body.classList.remove('info-modal--open');
    }
  }

  render() {
    const { onClose } = this.props;
    return (
      <Modal
        {...this.props}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        center
        showCloseIcon={false}
        focusTrapped={false}
        classNames={{
          overlay: 'info-modal__overlay',
          modal: 'info-modal__container',
          transitionEnter: 'info-modal--enter',
          transitionEnterActive: 'info-modal--enter-active',
          transitionExit: 'info-modal--exit',
          transitionExitActive: 'info-modal--exit-active',
        }}
        onEntered={() => {
          document.getElementsByClassName('info-modal__overlay')[0].classList.add('entered');
        }}
      >
        <div className="talk-to-us">
          <Button
            className="talk-to-us--close"
            onClick={() => {
              onClose();
              document.getElementsByClassName('info-modal__overlay')[0].classList.remove('entered');
            }}
          >
            <Close />
          </Button>
          <div className="talk-to-us__title">
            Talk to us
          </div>
          <div className="talk-to-us__content">
            <div className="talk-to-us__content__title">
              At your service
            </div>
            <div className="talk-to-us__content__desc">
              We invite you to call us for assistance or
              provide your information so we can contact you.
            </div>
            <div className="talk-to-us__content__title">
              Call us on
              {' '}
              <a href="tel:+442038831388">+44 20 3883 1388</a>
            </div>
            <div className="talk-to-us__content__desc">
              Monday to Friday — 10am - 5.30pm
            </div>
            <div className="talk-to-us__content__title">
              Email
            </div>
            <div className="talk-to-us__content__desc">
              <a href="mailto:hello@codebyedge.com">hello@codebyedge.com</a>
            </div>
            <div className="talk-to-us__content__title">
              Live Chat
            </div>
            <div className="talk-to-us__content__desc">
              Talk with us through our
              {' '}
              <a href="#!" className="link--underline">live chat</a>
              .
            </div>
            <div className="talk-to-us__content__title">
              Secured Transactions
            </div>
            <div className="talk-to-us__content__desc">
              We use secure encryption technologies when
              {' '}
              transferring and receiving customer information.
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}


export default InfoModal;
