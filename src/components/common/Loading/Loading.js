/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import Children from 'react-children-utilities';

const LoadingContext = React.createContext(false);

class Loading extends React.PureComponent {
  constructor(props) {
    super(props);
    const { children } = props;
    this.state = {
      visibleClass: 'cs-loader--hidden',
      showLoading: this.showLoading,
    };
    this.children = Children.deepMap(
      children,
      child => React.cloneElement(child,
        { ...child.props, showLoading: this.state.showLoading, key: Math.random(1000) }),
    );
  }

  showLoading = (newValue) => {
    this.setState({ visibleClass: newValue ? 'cs-loader--visible' : 'cs-loader--hidden' });
  }

  render() {
    return (
      <LoadingContext.Provider value={this.state}>
        <LoadingContext.Consumer>
          {({ visibleClass }) => (
            <>
              <div className={`cs-loader ${visibleClass}`}>
                <div className="cs-loader-inner">
                  <span className="dash" />
                  <span className="dot" />
                  <span className="dash" />
                  <span className="dot" />
                  <span className="dash" />
                  <span className="dash" />
                </div>
              </div>
              {this.children}
            </>
          )}
        </LoadingContext.Consumer>

      </LoadingContext.Provider>

    );
  }
}

Loading.propTypes = {
  children:
    PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]).isRequired,
};

export default Loading;
