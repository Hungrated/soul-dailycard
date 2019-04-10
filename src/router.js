import React from 'react';
import dynamic from 'dva/dynamic';
import PropTypes from 'prop-types';
import { Redirect, Route, Router, Switch } from 'dva/router';
import GlobalHeader from './components/global/GlobalHeader';

import styles from './styles/global/root.less';

function RouterConfig ({history, app}) {

  const commonModels = [require('./models/GlobalHeaderModel')];

  const routes = [
    {
      path: '/index',
      models: () => [...commonModels, require('./models/IndexModel')],
      component: () => require('./routes/IndexPage')
    },
    {
      path: '/login',
      models: () => [...commonModels],
      component: () => require('./routes/LoginPage')
    },
    {
      path: '/about',
      models: () => [...commonModels],
      component: () => require('./routes/AboutPage')
    },
    {
      path: '/user',
      models: () => [...commonModels],
      component: () => require('./routes/UserPage')
    },
    {
      path: '/protos',
      models: () => [...commonModels],
      component: () => require('./routes/ProtosPage')
    },
    {
      path: '/mycards',
      models: () => [...commonModels],
      component: () => require('./routes/MyCardPage')
    },
    {
      path: '/error',
      models: () => [...commonModels],
      component: () => require('./routes/ErrorPage')
    }
  ];

  return (
    <div className={styles['g-root']}>
      <GlobalHeader/>
      <div className={styles['g-container']}>
        <Router history={history}>
          <Switch>
            <Route path={'/'} exact render={() => <Redirect to={'/index'}/>}/>
            {
              routes.map(({path, ...dynamics}, key) => (
                <Route key={key}
                       exact
                       path={path}
                       component={dynamic({
                         app,
                         ...dynamics
                       })}
                />
              ))
            }
            <Route path={'/'} render={() => <Redirect to={'/error'}/>}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default RouterConfig;
