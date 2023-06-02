import React from 'react';
import PropTypes from 'prop-types';


const ClickableDiv = (props) => {
  const {
    onClick, children, className, beforeClick, afterClick, disabled,
  } = props;
  return (
    <div
      className={`clickable-div ${disabled ? 'disabled' : ''} ${className}`}
      onClick={async () => {
        if (!disabled) {
          beforeClick();
          await onClick();
          afterClick();
        }
      }}
      onKeyUp={() => false}
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  );
};

ClickableDiv.propTypes = {
  onClick: PropTypes.func.isRequired,
  beforeClick: PropTypes.func,
  afterClick: PropTypes.func,
  children: PropTypes.instanceOf(Object).isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

ClickableDiv.defaultProps = {
  className: '',
  disabled: false,
  beforeClick: () => null,
  afterClick: () => null,
};


export default ClickableDiv;
