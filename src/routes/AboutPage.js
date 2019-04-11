import React, { PureComponent } from 'react';
import { connect } from 'dva';

import { Button } from 'antd-mobile';
import styles from '../styles/AboutPage.less';

const mapStateToProps = ({overview}) => ({
  overview
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    header: {
      redirect: payload => dispatch({type: 'header/redirect', payload})
    }
    // about: {
    //   fetch: payload => dispatch({type: 'about/fetch', payload})
    // }
  }
});

class AboutPage extends PureComponent {

  state = {};

  componentDidMount () {
    // this.props.dispatcher.index.fetch();
  }

  render () {
    return (
      <div className={styles['g-main']}>
        <div className={styles['g-logo']}>
          <img className={styles['inner']}
               src={require('../assets/logo-cover.png')}
               alt={'logo'}
          />
        </div>
        <div className={styles['g-footer']}>
          <p className={styles['m-slogan']}>
            时光似梭&nbsp;/&nbsp;花火如客&nbsp;/&nbsp;良辰美景&nbsp;/&nbsp;知汝几何
          </p>
          <p className={styles['m-version']}>版本 v-0.0.1</p>
          <p className={styles['m-github']}>
            <Button className={styles['inner']} type={'ghost'} size={'small'}
                    onClick={() => {
                      window.open(
                        'https://github.com/Hungrated/soul-dailycard');
                    }}>
              访问本项目Github页面
            </Button>
          </p>
          <p className={styles['m-copyright']}>&copy;&nbsp;Copyright Hungrated
            2019,<br/>all rights reserved.</p>
        </div>
      </div>
    );
  }
}

AboutPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
