import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";
import routers from './routers/router';
import './styles/index.css'
import { HashRouter } from 'react-router-dom';
ReactDOM.render(
  <HashRouter>
      {renderRoutes(routers)}
  </HashRouter>,
  document.getElementById('root')
);