import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/ProtosPage.less';

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
    // protos: {
    //   fetch: payload => dispatch({type: 'protos/fetch', payload})
    // }
  }
});

class ProtosPage extends PureComponent {

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
        protos page
      </div>
    );
  }
}

ProtosPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProtosPage);
