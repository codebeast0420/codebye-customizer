import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import {
  setProductConfigurationAction, changingProductAction, getProductPartsAction, getThemesAction,
} from '../../../store/actions/ProductsActions';
import Menus from '../SingleMenu/menus';
import Pricing from '../../../lib/pricing';

class Footer extends React.Component {
  static propTypes = {
    to: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(Object),
      PropTypes.string,
    ]).isRequired,
    showLoading: PropTypes.func.isRequired,
    beforeNavigation: PropTypes.func.isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    history: PropTypes.oneOfType([
      PropTypes.instanceOf(Object),
      PropTypes.bool,
    ]),
    message: PropTypes.string,
    dispatchSetConfiguration: PropTypes.func.isRequired,
    configuration: PropTypes.instanceOf(Object).isRequired,
    close: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    onClose: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.bool,
    ]),
    disabled: PropTypes.bool,
    dispatchChangingProduct: PropTypes.func.isRequired,
    dispatchGetProductParts: PropTypes.func.isRequired,
    productParts: PropTypes.instanceOf(Object).isRequired,
    tooBig: PropTypes.func,
    dispatchGetThemes: PropTypes.func.isRequired,
    themes: PropTypes.instanceOf(Object).isRequired,
  };

  static defaultProps = {
    message: '',
    close: false,
    onClose: false,
    history: false,
    disabled: false,
    tooBig: () => null,
  }

  state = {
    loading: false,
  }

  handleClick = (evt) => {
    const {
      showLoading,
      beforeNavigation,
      product,
      message,
      dispatchSetConfiguration,
      configuration,
      close,
      onClose,
      disabled,
      dispatchChangingProduct,
      dispatchGetProductParts,
      dispatchGetThemes,
      productParts,
      tooBig,
      themes,
    } = this.props;
    evt.preventDefault();
    if (!disabled) {
      showLoading(true);
      if (close) {
        const paStone = _.find(Menus.getColorsSubMenu(), item => item.selected);
        let newStone = { ...paStone, choice: Menus.lettersChoices(message, _.find(_.find(product.attributes, item => item.slug === 'pa_stone').options, option => option.selected)) };
        if (message !== configuration.message && configuration.pa_stone.id === 'solid_color') {
          newStone = {
            ...paStone,
            choice: Menus.lettersChoices(message, configuration.pa_stone.choice[0].value),
          };
        }
        if (message !== configuration.message && configuration.pa_stone.id === 'themes') {
          newStone = {
            ...configuration.pa_stone,
            id: 'themes',
            name: 'Themes',
            subtitle: '',
            choice: Menus.lettersChoices(message, _.find(themes.data, theme => configuration.pa_stone.selected_theme === theme.slug).stones, true),
          };
        }
        let newConf = {
          ...configuration,
          message: message.trim(),
          pa_stone: message !== configuration.message ? newStone : configuration.pa_stone,
        };
        let paSize = configuration.pa_size;
        if (product.id === 83) {
          const innerSize = Pricing.necklaceSize(productParts.data, newConf);
          if (
            !_.isEmpty(paSize)
            && parseInt(configuration.pa_size.name, 10) < innerSize
          ) {
            paSize = _.find(_.find(product.attributes, item => item.slug === 'pa_size').options, item => parseInt(item.name, 10) > innerSize);
          }
        }
        const tooBigSizes = [];
        if (product.id === 2096 || product.id === 2124) {
          paSize = _.find(_.find(product.attributes, item => item.slug === 'pa_size').options, item => item.name === configuration.pa_size.name);
          const innerSizes = Pricing.mayfairBangleSize(productParts.data, { ...configuration, pa_size: paSize, message });
          const ringSize = Pricing.mayfairBangleRingSize(productParts.data, { ...configuration, pa_size: paSize, message });
          _.each(innerSizes, (size, index) => {
            if (size > ringSize) {
              tooBigSizes.push(index + 1);
            }
          });
          if (!_.isEmpty(tooBigSizes)) {
            paSize = false;
          }
        }
        newConf = {
          ...configuration,
          message: message.trim(),
          pa_stone: message !== configuration.message ? newStone : configuration.pa_stone,
          pa_size: paSize,
        };
        if (paSize || product.id === 408) {
          dispatchSetConfiguration(newConf);
          onClose();
          showLoading(false);
          tooBig(false);
          dispatchChangingProduct(false);
        } else {
          showLoading(false);
          tooBig(true, tooBigSizes);
        }
      } else {
        showLoading(true);
        this.setState({ loading: true });
        Promise.all([
          beforeNavigation(product.id, { message: message.trim() }),
          dispatchGetProductParts(product.id),
          dispatchGetThemes(),
        ]).then((result) => {
          const { payload: { data } } = result[0];
          const paMaterial = _.find(data.attributes, item => item.slug === 'pa_material');
          const paStoneType = _.find(data.attributes, item => item.slug === 'pa_stone-type');
          const paSize = _.find(data.attributes, item => item.slug === 'pa_size');
          const paHookTypeEarrings = _.find(data.attributes, item => item.slug === 'pa_hook-type-earrings');
          const paStone = _.find(Menus.getColorsSubMenu(), item => item.selected);
          const newStone = { ...paStone, choice: Menus.lettersChoices(message, _.find(result[2].payload.data, theme => 'code-standard' === theme.slug).stones, true), selected_theme: 'code-standard' };
          let paSizeOption = !_.isEmpty(paSize)
            ? _.find(paSize.options, item => item.selected) : false;
          const conf = {
            ...configuration,
            message: message.trim(),
            pa_material:
              !_.isEmpty(paMaterial) ? _.find(paMaterial.options, item => item.selected) : false,
            pa_stone_type:
              !_.isEmpty(paStoneType) ? _.find(paStoneType.options, item => item.selected) : false,
            pa_size: paSizeOption,
            pa_hook_type_earrings:
              !_.isEmpty(paHookTypeEarrings)
                ? _.find(paHookTypeEarrings.options, item => item.selected) : false,
            pa_stone: newStone,
          };
          if (!_.isEmpty(paSize) && product.id === 83) {
            const innerSize = Pricing.necklaceSize(result[1].payload.data.parts, conf);
            paSizeOption = _.find(paSize.options, item => parseInt(item.name, 10) > innerSize);
          }
          const tooBigSizes = [];
          if (!_.isEmpty(paSize) && (product.id === 2096 || product.id === 2124)) {
            paSizeOption = _.find(paSize.options, item => item.name === 'Medium');
            const innerSizes = Pricing.mayfairBangleSize(result[1].payload.data.parts, { ...conf, pa_size: paSizeOption });
            const ringSize = Pricing.mayfairBangleRingSize(result[1].payload.data.parts, { ...conf, pa_size: paSizeOption });
            _.each(innerSizes, (size, index) => {
              if (size > ringSize) {
                tooBigSizes.push(index + 1);
              }
            });
            if (!_.isEmpty(tooBigSizes)) {
              paSizeOption = false;
            }
          }
          const newConf = {
            ...conf,
            pa_size: paSizeOption,
          };

          if (paSizeOption || product.id === 408) {
            dispatchSetConfiguration(newConf);
            showLoading(false);
            const { to, history } = this.props;
            dispatchChangingProduct(false);
            tooBig(false);
            history.push(to);
          } else {
            showLoading(false);
            tooBig(true, tooBigSizes);
          }
        });
      }
    }
  };

  render() {
    const { to, disabled } = this.props;
    const { loading } = this.state;
    let disabledState = 'footer--enable';
    if (disabled || loading) {
      disabledState = 'footer--disabled';
    }
    return (
      <div className={`footer ${disabledState}`}>
        <Link to={to} onClick={this.handleClick} disabled={disabled || loading}>
          {(!loading
          && (
            <div className="footer__item">
              Continue
            </div>
          )
          ) || <div className="footer__item"><FontAwesomeIcon icon={faCircleNotch} className="social-link" spin /></div>}
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  configuration: state.configuration,
  productParts: state.productParts,
  themes: state.themes,
});

const mapDispatchToProps = {
  dispatchSetConfiguration: setProductConfigurationAction,
  dispatchChangingProduct: changingProductAction,
  dispatchGetProductParts: getProductPartsAction,
  dispatchGetThemes: getThemesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
