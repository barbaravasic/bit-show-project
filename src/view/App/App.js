import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import TopShowsPage from "../pages/TopShowsPage/TopShowsPage";
import ShowInfoPage from "../pages/ShowInfoPage/ShowInfoPage";
import Header from "../partials/Header/Header";
import Footer from "../partials/Footer/Footer";

import './app.css'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={TopShowsPage} />
        <Route path='/shows/:id' component={ShowInfoPage} />
      </Switch>
      <Footer />
    </React.Fragment>

  )
};

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("index"));