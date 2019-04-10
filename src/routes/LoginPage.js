import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/LoginPage.less';

// import { Popover } from 'antd-mobile';
// import 'antd-mobile/lib/popover/style'
const mapStateToProps = ({overview}) => ({
  overview
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    header: {
      redirect: payload => dispatch({type: 'header/redirect', payload})
    }
    // login: {
    //   fetch: payload => dispatch({type: 'index/fetch', payload})
    // }
  }
});

class LoginPage extends PureComponent {

  state = {};

  componentDidMount () {
    // this.props.dispatcher.index.fetch();
  }

  togglePageRedirect = (link) => {
    this.props.dispatcher.header.redirect({
      link: link,
      params: {}
    });
  };

  render () {
    return (
      <div className={styles['g-main']}>
        login page
      </div>
    );
  }
}

LoginPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
