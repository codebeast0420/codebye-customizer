import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import _ from 'underscore';
import { Container, Row, Col } from 'react-bootstrap';
import queryString from 'query-string';
import { getProductsAction } from '../../store';
import Products from '../common/ProductCard/Products';
import MessageModal from '../common/MessageModal';
import Menus from '../common/SingleMenu/menus';
import {
  setProductConfigurationAction,
  getProductAction,
  getProductPartsAction,
  getThemesAction,
  setQueryStringAction,
} from '../../store/actions';

class Archive extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productsGroup: [],
      modalVisible: false,
      toProduct: false,
      selectedProduct: {},
    };
    console.log("redux products in Archive", props.products);
    console.log("redux config in Archive", props.configuration);
    console.log("redux preMadeProduct in Archive", props.preMadeProduct);
    props.dispatchSetConfiguration({
      ...props.configuration,
      message: ""
    })
  }

  componentDidMount() {
    const {
      dispatchGetProducts, showLoading, match, location: { search }, dispatchSetQueryString,
    } = this.props;
    const query = queryString.parse(search);

    if (query && !_.isEmpty(query)) {
      const retailer = {
        retailer: {
          id: query.retailer,
          name: query.retailer_name,
        },
        seller: {
          id: query.seller,
          name: query.seller_name,
        },
      };

      dispatchSetQueryString(retailer);
    }
    showLoading(true);

    dispatchGetProducts().then(() => {
      const { products } = this.props;
      let productID = {};
      if (match.params.id) {
        productID = _.filter(
          products.data,
          product => product.id === parseInt(match.params.id, 10),
        );
        [productID] = productID;
      }
      if (_.isEmpty(productID)) {
        productID = {};
      }
      const tempProducts = products.data.map(value => ({ product: value, value: value.slug }));
      const filterProducts = tempProducts.filter((product) => product.product.id !== 6336);
      console.log('products', tempProducts);
      // console.log('filter result', filterProducts);
      this.setState(
        {
          productsGroup: filterProducts,
          modalVisible: !!match.params.id && !_.isEmpty(productID),
          selectedProduct: match.params.id
            ? productID
            : {},
        },
        () => showLoading(false),
      );
    });
  }

  render() {
    const {
      modalVisible, selectedProduct, productsGroup, toProduct,
    } = this.state;
    if (toProduct) {
      return <Redirect to="/product" />;
    }
    return (
      <Fragment>
        <MessageModal
          {...this.props}
          isOpen={modalVisible}
          onClose={() => this.setState({ modalVisible: false })}
          product={selectedProduct}
        />
        <Container className="archive">
          <Row>
            <Col className="archive__title">
              <h1>
                Choose your product
              </h1>
            </Col>
          </Row>
          <Row>
            {_.size(productsGroup) > 0 && (
              <Products
                options={productsGroup}
                onOptionPress={values => this.setState({ productsGroup: values })}
                onDoubleClick={(product) => {
                  const { configuration } = this.props;
                  if (configuration.message !== '') {
                    let { message } = configuration;
                    if (product.id === 408 && configuration.message.length === 1) {
                      message = configuration.message + configuration.message;
                    }
                    const {
                      dispatchSetConfiguration,
                      dispatchGetProduct,
                      dispatchGetProductParts,
                      dispatchGetThemes,
                    } = this.props;
                    Promise.all([
                      dispatchGetProduct(product.id, { message }),
                      dispatchGetProductParts(product.id),
                      dispatchGetThemes(),
                    ]).then((result) => {
                      const { payload: { data } } = result[0];
                      if (data.error) {
                        dispatchSetConfiguration({
                          ...configuration,
                          message: '',
                        });
                        this.setState({ modalVisible: true, selectedProduct: product });
                      } else {
                        const paMaterial = _.find(data.attributes, item => item.slug === 'pa_material');
                        const paStoneType = _.find(data.attributes, item => item.slug === 'pa_stone-type');
                        const paSize = _.find(data.attributes, item => item.slug === 'pa_size');
                        const paHookTypeEarrings = _.find(data.attributes, item => item.slug === 'pa_hook-type-earrings');
                        const paStone = _.find(Menus.getColorsSubMenu(), item => item.selected);
                        const newStone = { ...paStone, choice: Menus.lettersChoices(message, _.find(result[2].payload.data, theme => 'code-standard' === theme.slug).stones, true), selected_theme: 'code-standard' };
                        dispatchSetConfiguration({
                          ...configuration,
                          message,
                          pa_material:
                            !_.isEmpty(paMaterial)
                              ? _.find(paMaterial.options, item => item.selected) : false,
                          pa_stone_type:
                            !_.isEmpty(paStoneType)
                              ? _.find(paStoneType.options, item => item.selected) : false,
                          pa_size:
                            !_.isEmpty(paSize)
                              ? _.find(paSize.options, item => item.selected) : false,
                          pa_hook_type_earrings:
                            !_.isEmpty(paHookTypeEarrings)
                              ? _.find(paHookTypeEarrings.options, item => item.selected) : false,
                          pa_stone: newStone,
                        });
                        this.setState({ toProduct: true });
                      }
                    });
                  } else {
                    this.setState({ modalVisible: true, selectedProduct: product });
                  }
                }
                }
              />
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

Archive.propTypes = {
  dispatchGetProducts: PropTypes.func.isRequired,
  showLoading: PropTypes.func.isRequired,
  dispatchSetConfiguration: PropTypes.func.isRequired,
  dispatchGetProduct: PropTypes.func.isRequired,
  products: PropTypes.instanceOf(Object).isRequired,
  configuration: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  dispatchGetProductParts: PropTypes.func.isRequired,
  dispatchGetThemes: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  dispatchSetQueryString: PropTypes.func.isRequired,
  preMadeProduct: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
  configuration: state.configuration,
  preMadeProduct: state.preMadeProduct,
});

const mapDispatchToProps = {
  dispatchGetProducts: getProductsAction,
  dispatchSetConfiguration: setProductConfigurationAction,
  dispatchGetProduct: getProductAction,
  dispatchGetProductParts: getProductPartsAction,
  dispatchGetThemes: getThemesAction,
  dispatchSetQueryString: setQueryStringAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Archive);
