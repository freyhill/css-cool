
import Main from '../pages/Main';
import Font from '../pages/css/Font';
import Flex from '../pages/css/Flex';
import Css from '../pages/css/Index'

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