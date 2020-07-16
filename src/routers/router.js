
import React, {lazy } from 'react';
import LessMain from '@pages/less/Main';
const Main = lazy(() => import('@pages/Main'));
const Font = lazy(() => import('@pages/css/Font'));
const Flex = lazy(() => import('@pages/css/Flex'));
//onst LessMain = lazy(() => import('../pages/less/Main'))
const LessVariables = lazy(() => import('@pages/less/Variables/index'))
const LessIndex = lazy(() => import('@pages/less/Overview/index'))

const AntdSection = lazy(() => import('@pages/antd/Main'))
const AntdAlterStyle = lazy(() => import('@pages/antd/AlterStyle'))
const AntdAlterTheme = lazy(() => import('@pages/antd/AlterTheme')) 
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
          path: '/antd',
          component: AntdSection,
          routes: [
            {
              path: '/antd',
              exact: true,
              component: AntdAlterStyle
            },
            {
              path: '/antd/alter-style',
              exact: true,
              component: AntdAlterStyle
            },
            {
              path: '/antd/alter-theme',
              exact: true,
              component: AntdAlterTheme
            }
          ]
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