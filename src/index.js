import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import apiUtils from './utils/apiUtils';
import authUtils from './utils/authUtils';

const AppWithRouter = () => {
  return (
    <Router>
      <App apiUtils={apiUtils} authUtils={authUtils} />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));