
import React, {lazy } from 'react';
// import Font from '../pages/css/Font';
// import Flex from '../pages/css/Flex';
// import Css from '../pages/css/Index'
import LessMain from '../pages/less/Main';
const Main = lazy(() => import('../pages/Main'));
const Font = lazy(() => import('../pages/css/Font'));
const Flex = lazy(() => import('../pages/css/Flex'));
//onst LessMain = lazy(() => import('../pages/less/Main'))
const LessVariables = lazy(() => import('../pages/less/Variables/index'))
const LessIndex = lazy(() => import('../pages/less/Overview/index'))

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
        },
        {
          path:'/less',
          component: LessMain,
          routes: [
            {
              path: '/less',
              exact: true,
              component: LessIndex
            },
            {
              path: '/less/variables',
              exact: true,
              component: LessVariables
            }
          ]
        }
      ]
    }
  ];

  export default routes;