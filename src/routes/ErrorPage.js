import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/ErrorPage.less';

import { Button } from 'antd-mobile';

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

class ErrorPage extends PureComponent {

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
        <p className={styles['m-title']}>寻寻觅觅&nbsp;/&nbsp;冷冷清清</p>
        <p className={styles['m-homebutton']}>
          <Button className={styles['inner']} type={'primary'}
                  onClick={() => {this.togglePageRedirect('/index')}}>
            返回主页
          </Button>
        </p>
      </div>
    );
  }
}

ErrorPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage);
