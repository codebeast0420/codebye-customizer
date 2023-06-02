import React from 'react';
import PropTypes from 'prop-types';

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show() {
    const { timeout } = this.props;
    this.setState({ show: true }, () => {
      setTimeout(() => this.setState({ show: false }), timeout);
    });
  }

  render() {
    const { message } = this.props;
    const { show } = this.state;
    let showClass = 'disabled';
    if (show) {
      showClass = 'enabled';
    }
    return (
      <div className={`myToast ${showClass}`}>
        <div className="myToast__wrapper">
          {message}
        </div>
      </div>
    );
  }
}

Toast.defaultProps = {
  timeout: 1000,
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number,
};

export default Toast;
