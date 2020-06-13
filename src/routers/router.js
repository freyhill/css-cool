
import React, {lazy } from 'react';
// import Font from '../pages/css/Font';
// import Flex from '../pages/css/Flex';
// import Css from '../pages/css/Index'
const Main = lazy(() => import('../pages/Main'));
const Font = lazy(() => import('../pages/css/Font'));
const Flex = lazy(() => import('../pages/css/Flex'));

const routes = [
    {
      path: '/',
      component: Main,
      routes: [
        {
          path: '/css/',
          component: Font,
          exact: true,  
        },
        {
          path: '/css/flex',
          component: Flex,
          exact: true,
        },
        {
          path: '/css/font',
          component: Font,
          exact: true,
        }
      ]
    }
  ];

  export default routes;