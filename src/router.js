import React from 'react';
import dynamic from 'dva/dynamic';
import PropTypes from 'prop-types';
import { Redirect, Route, Router, Switch } from 'dva/router';
import GlobalHeader from './components/global/GlobalHeader';

function RouterConfig ({history, app}) {

  const commonModels = [require('./models/GlobalHeaderModel')];

  const routes = [
    {
      path: '/index',
      models: () => [...commonModels, require('./models/IndexModel')],
      component: () => require('./routes/IndexPage')
    }
  ];

  return (
    <div className={'g-root'}>
      <GlobalHeader/>
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
          {/*<Route path={'/'} render={() => <Redirect to={'/error'}/>}/>*/}
        </Switch>
      </Router>
    </div>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};

export default RouterConfig;
