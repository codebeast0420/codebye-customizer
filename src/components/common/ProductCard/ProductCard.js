import React from 'react';
import PropTypes from 'prop-types';
import { AllHtmlEntities } from 'html-entities';
import { Next } from '../../../assets';

const entities = new AllHtmlEntities();

class ProductCard extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.bool,
    product: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    selected: false,
  };

  constructor(props) {
    super(props);
    const { selected } = props;
    this.state = {
      active: selected,
    };
  }

  optionPressed = () => {
    const { onChange } = this.props;
    onChange(this);
  };

  optionToggle = (state) => {
    this.setState({ active: state });
  };

  render() {
    const { product } = this.props;
    const { active } = this.state;

    let productSelectedClass = 'product__image';
    let ctaSelectedClass = 'product__cta';
    if (active) {
      productSelectedClass = 'product__image product__image--selected';
      ctaSelectedClass = 'product__cta product__cta--selected';
    }

    return (
      <div
        className="product"
        onClick={this.optionPressed}
        onKeyUp={(key) => {
          if (key.keyCode === 13) {
            this.selectProduct();
          }
        }}
        role="button"
        tabIndex={0}
      >
        {product.prodImg && (
          <div className={productSelectedClass}>
            <div className="product__image--content" style={{ backgroundImage: `url('${product.prodImg}')` }} />
            <div className={ctaSelectedClass}>
              <span>Customise</span>
              <Next />
            </div>
          </div>
        )}
        <div className="product__title">
          {product.name}
        </div>
        <div className="product__subtitle">
          {`From ${entities.decode(product.currencies.currency_symbol)}${product.prodEnPrice.value}`}
        </div>
      </div>
    );
  }
}


export default ProductCard;
