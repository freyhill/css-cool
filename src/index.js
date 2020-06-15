import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";
import routers from './routers/router';
import {Provider} from 'react-redux';
import store from './store/index';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import {Spin} from 'antd';
import './styles/index.less'
ReactDOM.render(
  
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div className="loading flex center"><Spin></Spin></div>}>
          {renderRoutes(routers)}
          </Suspense>
        </BrowserRouter>
      </Provider>
    ,
  document.getElementById('root')
);