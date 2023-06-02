import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'underscore';
import { client } from '../../lib/env';
import {
  setProductConfigurationAction,
  getProductAction,
  getProductPartsAction,
  getThemesAction,
  setPremadeProductAction,
} from '../../store/actions';
import Menus from '../common/SingleMenu/menus';
import Pricing from '../../lib/pricing';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: {
          hash,
          id,
        },
      },
      dispatchGetProduct,
      setProductConfiguration,
      showLoading,
      dispatchGetProductParts,
      dispatchGetThemes,
      setPremadeProduct,
    } = this.props;

    showLoading(true);
    if (hash) {
      client.get('v1/get-options', {
        params: {
          hash,
        },
      }).then((response) => {
        Promise.all([
          dispatchGetProduct(response.data.product, { message: response.data.configuration.message }),
          dispatchGetProductParts(response.data.product),
          dispatchGetThemes(),
        ]).then((result) => {
          if (result[0].payload.data.id) {
            setProductConfiguration(response.data.configuration);
            this.setState({ loaded: true });
          } else {
            this.setState({ error: true });
          }
        }).catch(() => {
          this.setState({ error: true });
        });
      }).catch(() => {
        this.setState({ error: true });
      });
    } else {
      client.get(`v2/simple_product/${id}`).then((response) => {
        Promise.all([
          dispatchGetProduct(response.data.parent_product, { message: response.data.message }),
          dispatchGetProductParts(response.data.parent_product),
          dispatchGetThemes(),
        ]).then((result) => {
          if (result[0].payload.data.id) {
            result[0].payload.data.attributes = response.data.attributes;
            const paMaterial = _.find(result[0].payload.data.attributes, item => item.slug === 'pa_material');
            const paStoneType = _.find(result[0].payload.data.attributes, item => item.slug === 'pa_stone-type');
            const paSize = _.find(result[0].payload.data.attributes, item => item.slug === 'pa_size');
            const paHookTypeEarrings = _.find(result[0].payload.data.attributes, item => item.slug === 'pa_hook-type-earrings');
            const paStone = _.find(Menus.getColorsSubMenu(), item => item.selected);
            const newStone = { ...paStone, choice: Menus.lettersChoices(response.data.message, _.find(result[2].payload.data, theme => 'code-standard' === theme.slug).stones, true), selected_theme: 'code-standard' };
            let paSizeOption = !_.isEmpty(paSize)
              ? _.find(paSize.options, item => item.selected) : false;
            const conf = {
              message: response.data.message,
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
            if (!_.isEmpty(paSize) && response.data.parent_product === 83) {
              const innerSize = Pricing.necklaceSize(result[1].payload.data.parts, conf);
              paSizeOption = _.find(paSize.options, item => parseInt(item.name, 10) > innerSize);
            }
            const tooBigSizes = [];
            if (!_.isEmpty(paSize) && (response.data.parent_product === 2096 || response.data.parent_product === 2124)) {
              paSizeOption = _.find(paSize.options, item => item.name === 'Small');
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

            setProductConfiguration(newConf);
            setPremadeProduct({
              isPremade: true,
              id: response.data.id,
              parent_id: response.data.parent_product,
              message: response.data.message,
              price: response.data.price,
            });
            this.setState({ loaded: true });
          } else {
            this.setState({ error: true });
          }
        }).catch(() => {
          this.setState({ error: true });
        });
      }).catch(() => {
        this.setState({ error: true });
      });
    }
  }

  render() {
    const {
      loaded, error,
    } = this.state;
    if (loaded) {
      return <Redirect to="/product" />;
    }
    if (error) {
      return <Redirect to="/" />;
    }
    return (
      <div />
    );
  }
}

Share.defaultProps = {};

Share.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
  dispatchGetProduct: PropTypes.instanceOf(Object).isRequired,
  setProductConfiguration: PropTypes.instanceOf(Object).isRequired,
  showLoading: PropTypes.func.isRequired,
  dispatchGetProductParts: PropTypes.func.isRequired,
  dispatchGetThemes: PropTypes.func.isRequired,
  setPremadeProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  dispatchGetProduct: getProductAction,
  dispatchGetProductParts: getProductPartsAction,
  setProductConfiguration: setProductConfigurationAction,
  setPremadeProduct: setPremadeProductAction,
  dispatchGetThemes: getThemesAction,
};

export default connect(null, mapDispatchToProps)(Share);
