import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import MapPage from './MapPage/MapPage';
// import Main from './Pages/Main/Main';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Header />
        {/* <Route exact path="/map" component={MapPage} /> */}
        {/* <Route exact path="/" component={Main} /> */}
      </Switch>
    </Router>
  );
};
export default Routes;
