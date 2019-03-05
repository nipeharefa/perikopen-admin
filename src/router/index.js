import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from './routes';
import Styled from './styled';

const { SidebarLeft, Main } = Styled;

const RouteComponents = () => routes.map((route) => 
  <Route exact path={route.path} component={route.component} key={route.path}/>
);

const Navigation = () => {
  return (
    <div>
      <Router>
        <div>
          <SidebarLeft className="uk-visible@m">
            <h3>Perikopen Admin</h3>
            <ul className="uk-nav uk-nav-default tm-nav">
              <li className="uk-nav-header">Getting started</li>
              <li className="uk-nav-header">Getting started</li>
              <li className="uk-nav-header">Getting started</li>
              <li className="uk-nav-header">Getting started</li>
              <li className="uk-nav-header">Getting started</li>
              <li className="uk-nav-header">Getting started</li>
            </ul>
          </SidebarLeft>
          <Main className="uk-section uk-section-default">
            <div className="uk-container uk-container-small uk-position-relative">
              <Switch>
                <RouteComponents />
              </Switch>
            </div>
          </Main>
        </div>
      </Router>
    </div>
  )
};

export default Navigation;