/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-danger */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ContentEditable from 'react-contenteditable';
import anime from 'animejs';
import _ from 'underscore';
import { CSSTransition } from 'react-transition-group';
import Header from '../Header';
import Footer from '../Footer';
import MorseCode from '../../../lib/morse_code';
import {
  getProductAction,
  setProductConfigurationAction,
  setSavedAction,
  setProductAction,
  setProductPArtsAction,
} from '../../../store/actions/ProductsActions';

Modal.setAppElement('#root');

class MessageModal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    dispatchGetProduct: PropTypes.instanceOf(Object).isRequired,
    configuration: PropTypes.instanceOf(Object).isRequired,
    dispatchSetSaved: PropTypes.func.isRequired,
    changingProduct: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.bool]).isRequired,
    dispatchSetConfiguration: PropTypes.func.isRequired,
    dispatchSetProduct: PropTypes.func.isRequired,
    dispatchSetProductParts: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const { configuration: { message }, product } = this.props;
    let html = this.wrapChars(message);
    let text = message;
    let htmlTwo = '';
    let textTwo = '';
    console.log('configuration in MessageModa redux', props.configuration);
    console.log('changingProduct in MessageModa redux', props.changingProduct);
    if (!_.isEmpty(product) && product.id === 408) {
      const messageSplitted = message.split('');
      html = this.wrapChars(message.split('')[0]);
      text = message.split('')[0];

      htmlTwo = this.wrapChars(messageSplitted[0]);
      textTwo = messageSplitted[0];

      if (messageSplitted.length > 1) {
        htmlTwo = this.wrapChars(messageSplitted[1]);
        textTwo = messageSplitted[1];
      }
    }
    this.state = {
      html,
      text,
      htmlTwo,
      textTwo,
      placeholderVisibility: message.length === 0,
      inputFocused: false,
      placeholderTwoVisibility: textTwo.length === 0,
      inputFocusedTwo: false,
      tooBig: false,
      bangleToBig: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { configuration } = this.props;
    if (prevProps.configuration.message !== configuration.message && configuration.message === '') {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        html: '', text: '', inputFocused: false, placeholderVisibility: true,
      });
    }
    if (prevState.text === this.state.text && prevProps.product.messageInputs === 1) {
      this.animation();
    }
    if (
      prevState.text === this.state.text
      && prevState.textTwo === this.state.textTwo
      && prevProps.product.messageInputs === 2
    ) {
      this.animation();
    }
  }

  animation = () => {
    anime({
      targets: '.morse-code > .last > div[class^="morse-code--"]',
      height: (el) => {
        if (el.className === 'morse-code--dash') {
          return 16;
        }
        return 6;
      },
      duration: 800,
      delay: anime.stagger(100),
    });
  }

  wrapChars = str => str.replace(/\w|\s/g, '<div>$&</div>');

  strip = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  buildMorseCode = (string) => {
    const splittedString = string.split('');
    return splittedString.map((letter, i) => {
      const l = new MorseCode(letter);
      const isLast = i + 1 === splittedString.length;
      return (
        <div className={`morse-code__letter ${isLast ? 'last' : ''}`} key={Math.random() * 1000}>
          {l.getLetterCode().reverse().map((code) => {
            let height = '0px';
            if (!isLast) {
              height = '16px';
              if (code === 'dot') {
                height = '6px';
              }
            }
            return <div className={`morse-code--${code}`} style={{ height }} key={Math.random() * 1000} />;
          })}
        </div>
      );
    });
  }

  handleChange = (e) => {
    const { product, dispatchSetSaved } = this.props;
    let text = this.strip(e.target.value);
    if (product.messageAllowSpaces && !/\w|\s/.test(text[text.length - 1])) {
      text = text.substring(0, text.length - 1);
    }
    if (!product.messageAllowSpaces && !/\w/.test(text[text.length - 1])) {
      text = text.substring(0, text.length - 1);
    }
    if (text.length > product.messageMaxCharacters) {
      text = text.substring(0, text.length - 1);
    }
    dispatchSetSaved(false);
    return text;
  }

  getTip = (tip, tipForTip = false) => {
    const { product } = this.props;
    let state = {
      text: tip,
      html: this.wrapChars(tip),
      placeholderVisibility: false,
    };
    if (product.messageInputs === 2) {
      state = {
        text: tip,
        html: this.wrapChars(tip),
        textTwo: tip,
        htmlTwo: this.wrapChars(tip),
        placeholderVisibility: false,
        placeholderTwoVisibility: false,
      };
      if (tip.length === 2) {
        state = {
          text: tip[0],
          html: this.wrapChars(tip[0]),
          textTwo: tip[1],
          htmlTwo: this.wrapChars(tip[1]),
          placeholderVisibility: false,
          placeholderTwoVisibility: false,
        };
      }
    }
    return (
      <div className="message__tips__examples__tip" key={tip}>
        <span
          onClick={() => {
            this.setState(state, () => this.animation());
          }}
          onKeyUp={(key) => {
            if (key.keyCode === 13) {
              this.setState({
                text: tip,
                html: this.wrapChars(tip),
              }, () => this.animation());
            }
          }}
          role="button"
          tabIndex={0}
        >
          {tip}
        </span>
        {tipForTip && (
          <span>{tipForTip}</span>
        )}
      </div>
    );
  }

  getNumberWithOrdinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  render() {
    const {
      onClose, product, dispatchGetProduct, configuration,
    } = this.props;
    const {
      html,
      htmlTwo,
      text: message,
      placeholderVisibility,
      inputFocused,
      textTwo,
      placeholderTwoVisibility,
      inputFocusedTwo,
      tooBig,
      bangleToBig,
    } = this.state;
    let visible = 'message__placeholder--visible';
    let visibleTwo = 'message__placeholder--visible';
    if (!placeholderVisibility || inputFocused) {
      visible = 'message__placeholder--hidden';
    }
    if (!placeholderTwoVisibility || inputFocusedTwo) {
      visibleTwo = 'message__placeholder--hidden';
    }
    let sentence = '';
    if (!_.isEmpty(bangleToBig)) {
      let word = 'word';
      if (bangleToBig.length > 1) {
        word = 'words';
      }
      _.each(bangleToBig, (position, index) => {
        sentence += this.getNumberWithOrdinal(position);
        if (bangleToBig.length > index + 1) {
          if (bangleToBig[index + 1] && bangleToBig.length === index + 2) {
            sentence += ' and ';
          }
          if (bangleToBig[index + 1] && bangleToBig.length > index + 2) {
            sentence += ', ';
          }
        }
      });
      sentence += ` ${word}`;
    }
    const customStyles = {
      content: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        marginRight: 0,
        width: '100%',
        height: '100%',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      },
      overlay: {
        zIndex: 999,
      },
    };
    return (
      <Modal
        {...this.props}
        style={customStyles}
        closeOnEsc={false}
        closeOnOverlayClick={false}
        closeTimeoutMS={300}
      >
        <Header
          onProd
          onClose={() => {
            let html2 = this.wrapChars(configuration.message);
            let text2 = configuration.message;
            let htmlTwo2 = '';
            let textTwo2 = '';
            if (!_.isEmpty(product) && product.id === 408 && configuration.message.length > 0) {
              const messageSplitted = configuration.message.split('');
              html2 = this.wrapChars(configuration.message.split('')[0]);
              text2 = configuration.message.split('')[0];

              htmlTwo2 = this.wrapChars(messageSplitted[0]);
              textTwo2 = messageSplitted[0];

              if (messageSplitted.length > 1) {
                htmlTwo2 = this.wrapChars(messageSplitted[1]);
                textTwo2 = messageSplitted[1];
              }
            }

            const {
              changingProduct,
              dispatchSetConfiguration,
              dispatchSetProduct,
              dispatchSetProductParts,
            } = this.props;
            if (changingProduct) {
              dispatchSetProductParts(changingProduct.productParts);
              dispatchSetProduct(changingProduct.product);
              dispatchSetConfiguration(changingProduct.configuration);
            }

            this.setState({
              html: html2,
              text: text2,
              htmlTwo: htmlTwo2,
              textTwo: textTwo2,
              placeholderVisibility: configuration.message.length === 0,
              placeholderTwoVisibility: textTwo2.length === 0,
            });
            this.setState({ tooBig: false });
            onClose();
          }}
        />
        <div className="message container">
          <div className="message__inputs">
            <div className={`message__input-container ${product.messageInputs === 2 ? 'two' : ''}`}>
              <div className="morse-code">
                {this.buildMorseCode(this.state.text)}
              </div>
              <ContentEditable
                html={html}
                disabled={false}
                onChange={(e) => {
                  const text = this.handleChange(e);
                  this.setState({
                    html: this.wrapChars(text),
                    text,
                    placeholderVisibility: !(text.length > 0),
                  });
                }}
                onFocus={() => this.setState({ inputFocused: true })}
                onBlur={() => this.setState({ inputFocused: false })}
                className="message__input"
              />
              {product.messageInputs === 1 && (
                <div className={`message__placeholder ${visible}`}>
                  Type your message
                </div>
              )}
              {product.messageInputs === 2 && (
                <div className={`message__placeholder ${visible}`}>
                  Left
                </div>
              )}
            </div>
            {product.messageInputs === 2 && (
              <div className="message__input-container two">
                <div className="morse-code">
                  {this.buildMorseCode(this.state.textTwo)}
                </div>
                <ContentEditable
                  html={htmlTwo}
                  disabled={false}
                  onChange={(e) => {
                    const text = this.handleChange(e);
                    this.setState({
                      htmlTwo: this.wrapChars(text),
                      textTwo: text,
                      placeholderTwoVisibility: !(text.length > 0),
                    });
                  }}
                  onFocus={() => this.setState({ inputFocusedTwo: true })}
                  onBlur={() => this.setState({ inputFocusedTwo: false })}
                  className="message__input"
                />
                {product.messageInputs === 2 && (
                  <div className={`message__placeholder ${visibleTwo}`}>
                    Right
                  </div>
                )}
              </div>
            )}
          </div>
          <div style={{ position: 'relative' }}>
            <CSSTransition in={tooBig} timeout={500} classNames="max-char">
              <div className="message__maxCharactersText">
                <div>{product.messageMaxCharactersText}</div>
              </div>
            </CSSTransition>
            <CSSTransition in={tooBig} timeout={500} classNames="too-big">
              <div className="message__maxCharactersText size" style={{ position: 'absolute', top: 0, width: '100%' }}>
                {_.isEmpty(bangleToBig) && (
                  <div>Your chosen message exceeds our maximum necklace length of 75cm. Please send us the requested message to <a href="mailto:hello@codebyedge.com">hello@codebyedge.com</a> and one of customer care team members will be in contact.</div>
                )}
                {!_.isEmpty(bangleToBig) && (
                  <div>Your {sentence} exceeds our maximum bangle length. Please send us the requested message to <a href="mailto:hello@codebyedge.com">hello@codebyedge.com</a> and one of customer care team members will be in contact.</div>
                )}
              </div>
            </CSSTransition>
          </div>
          <Footer
            {...this.props}
            to="/product"
            message={message + textTwo}
            beforeNavigation={dispatchGetProduct}
            disabled={message === '' || (product.id === 408 && textTwo === '')}
            tooBig={(tooBigState, bangleState) => {
              this.setState({ tooBig: tooBigState, bangleToBig: bangleState });
            }}
          />
          <div className="message__tips">
            <div className="message__tips__title">
              Need inspiration?
            </div>
            <div className="message__tips__examples">
              {
                product.inspiration
                && product.inspiration.map(value => this.getTip(value.message, value.description))
              }
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  configuration: state.configuration,
  changingProduct: state.changingProduct,
});

const mapDispatchToProps = {
  dispatchGetProduct: getProductAction,
  dispatchSetConfiguration: setProductConfigurationAction,
  dispatchSetSaved: setSavedAction,
  dispatchSetProduct: setProductAction,
  dispatchSetProductParts: setProductPArtsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal);
