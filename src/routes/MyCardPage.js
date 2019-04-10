import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/MyCardPage.less';

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
    // mycard: {
    //   fetch: payload => dispatch({type: 'mycard/fetch', payload})
    // }
  }
});

class MyCardPage extends PureComponent {

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
        <p className={styles['m-title']}>my cards my cards my cards my cards my
          cards my cards my cards my cards my cards my cards my cards my cards
          my cards my cards my cards my cards my cards my cards my cards my
          cards my cards my cards my cards my cards my cards my cards my cards
          my cards my cards my cards my cards my cards my cards my cards my
          cards my cards my cards my cards my cards my cards my cards my cards
          my cards my cards my cards my cards my cards my cards my cards my
          cards my cards my cards my cards my cards my cards my cards my cards
          my cards my cards my cards my cards my cards my cards my cards</p>
        <div className={styles['m-edit']}>
          <span className={styles['inner']}
                onClick={() => {this.togglePageRedirect('/edit');}}/>
        </div>
      </div>
    );
  }
}

MyCardPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyCardPage);
