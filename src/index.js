import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";
import routers from './routers/router';
import Cover from './components/Cover';
import { HashRouter } from 'react-router-dom';
import './styles/index.css'
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <HashRouter>
      {renderRoutes(routers)}
    </HashRouter>
    </Suspense>,
  document.getElementById('root')
);