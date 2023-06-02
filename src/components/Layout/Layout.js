import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'underscore';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from '../common/Header';
import Archive from '../Archive';
import Single from '../Single';
import Loading from '../common/Loading';
import Share from '../Share';
import NoMatch from '../common/NoMatch';
import { URL } from '../../lib/env';
import { setProductConfigurationAction } from '../../store/actions';

const RoutedArchive = props => <Loading><Archive {...props} /></Loading>;
const RoutedSingle = props => <Loading><Single {...props} /></Loading>;
const RoutedShare = props => <Loading><Share {...props} /></Loading>;

class Layout extends React.PureComponent {
  static propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    preMadeProduct: PropTypes.instanceOf(Object).isRequired,
  }
 
  state = {}

  componentDidMount() {
    window.addEventListener('popstate', this.popState);
  }

  popState = (e) => {
    e.preventDefault();
    const { preMadeProduct } = this.props;
    const back = preMadeProduct.isPremade ? `${URL}ready-to-wear` : `${URL}shop-the-range`;
    window.location = back;
  }

  render() {
    const { product, preMadeProduct } = this.props;
    const back = preMadeProduct.isPremade ? `${URL}ready-to-wear` : `${URL}shop-the-range`;
    console.log('success');
    return (
      <Router basename="/customiser">
        <Header
          onBack={back}
          onClose={!_.isEmpty(product.data) ? '/product' : false}
        />
        <Loading>
          <Switch>
            <Route exact path="/" component={RoutedArchive} />
            <Route exact path="/product" component={RoutedSingle} />
            <Route exact path="/product/:id" component={RoutedArchive} />
            <Route exact path="/s_product/:id" component={RoutedShare} />
            <Route path="/share/:hash" component={RoutedShare} />
            <Route component={NoMatch} />
          </Switch>
        </Loading>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
  preMadeProduct: state.preMadeProduct,
  changingProduct: state.changingProduct,
});

const mapDispatchToProps = {
  dispatchSetConfiguration: setProductConfigurationAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
