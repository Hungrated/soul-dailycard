import dva from 'dva';
import './styles/global/base.less';
// import { createBrowserHistory as createHistory } from 'history';

const app = dva();

// app.use({});

// app.model(require('./models/example').default);

app.router(require('./router').default);

app.start('#root');
