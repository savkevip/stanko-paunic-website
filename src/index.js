import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./containers/Home";

import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles';

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
