import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../../styles/global/GlobalHeader.less';

import { Popover } from 'antd-mobile';

const Item = Popover.Item;

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

class GlobalHeader extends PureComponent {

  state = {
    current: window.location.pathname.substring(1) || 'index',
    menu: false,
    user: false,
    selected: ''
  };

  onSelect = (opt) => {
    const link = opt.props.value;
    this.setState({
      selected: link,
      menu: false,
      user: false
    });
    if ((/^(http|https):\/\//).test(link)) {
      window.open(link);
    } else {
      this.togglePageRedirect(link);
    }
  };

  handleMenuVisibleChange = (menu) => {
    this.setState({
      menu
    });
  };

  handleUserVisibleChange = (user) => {
    this.setState({
      user
    });
  };

  togglePageRedirect = (link) => {
    this.props.dispatcher.header.redirect({
      link: link,
      params: {}
    });
  };

  render () {
    const menuOverlayItems = [
      {
        key: '1-1',
        value: 'login',
        name: '登入/登出',
        link: '/login'
      },
      {
        key: '1-2',
        value: 'about',
        name: '关于日·笺',
        link: '/about'
      },
      {
        key: '1-3',
        value: 'github',
        name: 'Github详情页',
        link: 'https://github.com/Hungrated/soul-dailycard'
      }
    ];

    const userOverlayItems = [
      {
        key: '2-1',
        value: 'user',
        name: '我的资料',
        link: '/user'
      },
      {
        key: '2-2',
        value: 'mycards',
        name: '我的卡片',
        link: '/mycards'
      },
      {
        key: '2-3',
        value: 'prototypes',
        name: '我的模板',
        link: '/protos'
      }
    ];

    return (
      <div className={styles['g-header']}>
        <div className={styles['g-menu']}>
          <span className={styles['inner']}
                onClick={() => {this.handleMenuVisibleChange(true);}}/>
          <Popover mask
                   overlayClassName="popover-menu"
                   overlayStyle={{color: 'currentColor'}}
                   visible={this.state.menu}
                   placement={'bottomLeft'}
                   overlay={menuOverlayItems.map(function (item) {
                     return (
                       <Item key={item.key} value={item.link}>{item.name}</Item>
                     );
                   })}
                   align={{
                     overflow: {adjustY: 0, adjustX: 0},
                     offset: [13, -35]
                   }}
                   onVisibleChange={this.handleMenuVisibleChange}
                   onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center'
            }}
            >
            </div>
          </Popover>
        </div>
        <div className={styles['g-logo']}>
          <img className={styles['inner']}
               src={require('../../assets/logo-header-w.png')}
               alt={'logo'} onClick={() => {this.togglePageRedirect('/index');}}
          />
        </div>
        <div className={styles['g-user']}>
          <span className={styles['inner']}
                onClick={() => {this.handleUserVisibleChange(true);}}/>
          <Popover mask
                   overlayClassName="popover-user"
                   overlayStyle={{color: 'currentColor'}}
                   visible={this.state.user}
                   placement={'bottomRight'}
                   overlay={userOverlayItems.map(function (item) {
                     return (
                       <Item key={item.key} value={item.link}>{item.name}</Item>
                     );
                   })}
                   align={{
                     overflow: {adjustY: 0, adjustX: 0},
                     offset: [-28, -35]
                   }}
                   onVisibleChange={this.handleUserVisibleChange}
                   onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center'
            }}
            >
            </div>
          </Popover>
        </div>
      </div>
    );
  }
}

GlobalHeader.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);

