import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../../styles/global/GlobalHeader.less';


const mapStateToProps = ({header}) => ({
  header
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  dispatcher: {
    header: {
      redirect: payload => dispatch({type: 'header/redirect', payload})
    }
  }
});

// const navItems = [
//   {
//     key: 'index',
//     tlt: '主页',
//     link: '/index'
//   }
// ];

class GlobalHeader extends PureComponent {

  // state = {
  //   current: window.location.pathname.substring(1) || 'index'
  // };

  togglePageRedirect = (key, link) => {
    this.setState({
      current: key
    });
    this.props.dispatcher.header.redirect({
      link: link,
      params: {}
    });
  };

  // handleClick = (e) => {
  //   const link = e.item.props.link;
  //   if ((/^(http|https):\/\//).test(link)) {
  //     window.open(link);
  //   } else {
  //     this.togglePageRedirect(e.key, link);
  //   }
  // };

  render () {
    return (
      <div className={styles['g-header']}>
        <div className={styles['g-menu']}>
          <span className={styles['inner']}>M</span>
        </div>
        <div className={styles['g-logo']}>
          <img className={styles['inner']}
               src={require('../../assets/logo-header-w.png')}
               alt={'logo'}/>
        </div>
        <div className={styles['g-user']}>
          <span className={styles['inner']}>U</span>
        </div>
      </div>
    );
  }
}

GlobalHeader.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);

