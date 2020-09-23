import React from 'react';
import logo from './logo.svg';
import './App.css';
import {compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, withRouter, Route, Switch} from 'react-router-dom';
import store from './redux/store.js';
import HeaderContainer from './components/header/headerContainer.jsx';
import CalculatorContainer from './components/calculator/calculatorContainer.jsx';
import TextContainer from './components/text/textContainer.jsx';

function App() {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Switch>
        <Route exact render={() => <CalculatorContainer />} path="/" />
        <Route render={() => <TextContainer />} path="/text" />
      </Switch>
    </div>
  );
}

const AppContainer = compose(
  withRouter,
)(App);

const MainApp = (props) => {
  return(
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp;
