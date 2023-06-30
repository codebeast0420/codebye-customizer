import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Archive from '../Archive';
import Single from '../Single';
import Loading from '../common/Loading';
import NoMatch from '../common/NoMatch';
import Amanti from '../Single/Amanti';
import Mayfair from '../Single/Mayfair';
import Necklace from '../Single/Necklace';
import Pendant from '../Single/Pendant';
import Earrings from '../Single/Earrings';
import Bracelet from '../Single/Bracelet';

const RoutedArchive = props => <Loading><Archive {...props} /></Loading>;
const RoutedAmanti = (props) => <Loading><Amanti {...props} category='amanti' /></Loading>;
const RoutedMayfair = (props) => <Loading><Mayfair {...props} category='mayfair' /></Loading>;
const RoutedNecklace = (props) => <Loading><Necklace {...props} category='necklace' /></Loading>;
const RoutedBracelet = (props) => <Loading><Bracelet {...props} category='bracelet' /></Loading>;
const RoutedEarrings = (props) => <Loading><Earrings {...props} category='earrings' /></Loading>;
const RoutedPendant = (props) => <Loading><Pendant {...props} category='pendant' /></Loading>;

const Layout = () => {
  const product = useSelector(store => store.product);

  useEffect(() => {
    console.log('success', product);
  }, [])
  
  return (
    <Router>
      <Loading>
        <Switch>
          <Route exact path="/" component={RoutedArchive} />
          <Route exact path="/amanti" component={RoutedAmanti} />
          <Route exact path="/mayfair" component={RoutedMayfair} />
          <Route exact path="/aquafiore/bracelet" component={RoutedBracelet} />
          <Route exact path="/aquafiore/earrings" component={RoutedEarrings} />
          <Route exact path="/aquafiore/necklace" component={RoutedNecklace} />
          <Route exact path="/aquafiore/pendant" component={RoutedPendant} />
          <Route component={NoMatch} />
        </Switch>
      </Loading>
    </Router>
  );
}

export default Layout;
