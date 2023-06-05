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
import { setProductConfigurationAction, getProductPartsAction, getThemesAction } from '../../store/actions';
import Bracelet from '../Bracelet/Bracelet';

const RoutedArchive = props => <Loading><Archive {...props} /></Loading>;
const RoutedSingle = props => <Loading><Single {...props} /></Loading>;
const RoutedBracelet = props => <Loading><Bracelet {...props} /></Loading>;
const RoutedShare = props => <Loading><Share {...props} /></Loading>;

class Layout extends React.PureComponent {
  static propTypes = {
    product: PropTypes.instanceOf(Object).isRequired,
    preMadeProduct: PropTypes.instanceOf(Object).isRequired,
  }
 
  state = {}

  render() {
    const { product, preMadeProduct } = this.props;
    console.log('success');
    return (
      <Router>
        <Loading>
          <Switch>
            <Route exact path="/" component={RoutedArchive} />
            <Route exact path="/product" component={RoutedSingle} />
            <Route exact path="/bracelet" component={RoutedBracelet} />
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
  dispatchGetProductParts: getProductPartsAction,
  dispatchGetThemes: getThemesAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
