import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProductCard from '.';

class Products extends React.PureComponent {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
    multiple: PropTypes.bool,
    onOptionPress: PropTypes.func,
    onDoubleClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    multiple: false,
    onOptionPress: () => null,
  };

  constructor(props) {
    super(props);
    const {
      options,
    } = props;
    this.childs = options.map((child) => {
      const newProps = [];
      newProps.onChange = this.onChange;
      newProps.key = child.value;
      newProps.product = child.product;
      newProps.value = child.value;
      newProps.selected = child.selected;
      newProps.ref = React.createRef();
      return React.createElement(ProductCard, newProps);
    });
  }

  onChange = (option) => {
    const {
      options, multiple, onOptionPress, onDoubleClick,
    } = this.props;
    const activatedOptions = options;
    if (multiple) {
      option.optionToggle(!option.state.active);
      this.childs.map((child, index) => {
        if (option.props.value === child.ref.current.props.value) {
          activatedOptions[index] = {
            selected: !option.state.active,
            value: child.props.value,
            product: child.props.product,
          };
        }
        return null;
      });
    } else {
      this.childs.map((child, index) => {
        if (option.props.value === child.ref.current.props.value) {
          onDoubleClick(child.ref.current.props.product);
          /* if (option.state.active) { */
          onDoubleClick(child.ref.current.props.product);
          /* } else { */
          child.ref.current.optionToggle(!option.state.active);
          activatedOptions[index] = {
            selected: !option.state.active,
            value: child.props.value,
            product: child.props.product,
          };
          /* } */
        } else {
          child.ref.current.optionToggle(false);
          activatedOptions[index] = {
            selected: false,
            value: child.props.value,
            product: child.props.product,
          };
        }
        return null;
      });
    }
    onOptionPress(activatedOptions);
  };

  render() {
    return this.childs.map(child => <Col xs={6} md={4} key={Math.random() * 1000} className="product__col">{child}</Col>);
  }
}

export default Products;
