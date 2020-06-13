import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";
import routers from './routers/router';
import {Provider} from 'react-redux';
import store from './store/index';
import { HashRouter } from 'react-router-dom';

import './styles/index.less'
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <HashRouter>
          {renderRoutes(routers)}
        </HashRouter>
      </Provider>
    </Suspense>,
  document.getElementById('root')
);