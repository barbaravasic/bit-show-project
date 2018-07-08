import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from 'react-router-dom';
import TopShowsPage from "./pages/TopShowsPage";
import ShowInfoPage from "./pages/ShowInfoPage";
import Header from "./partials/Header";
import Footer from "./partials/Footer";

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