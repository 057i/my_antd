import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/hello',
        exact: true,
        component: require('../hello.js').default,
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
      {
        path: '/student/add',
        exact: true,
        component: require('../student/add.js').default,
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
      {
        path: '/student',
        exact: true,
        component: require('../student/index.js').default,
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
      {
        path: '/student/:id',
        exact: true,
        component: require('../student/$id.js').default,
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/lwq/Desktop/web/袁react/ant-design/antd-修改学生管理样式/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'antd-learn1',
        _title_default: 'antd-learn1',
      },
    ],
    _title: 'antd-learn1',
    _title_default: 'antd-learn1',
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/lwq/Desktop/web/袁react/ant-design/antd-修改学生管理样式/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'antd-learn1',
    _title_default: 'antd-learn1',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
