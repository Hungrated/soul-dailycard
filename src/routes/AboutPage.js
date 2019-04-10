import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../styles/AboutPage.less';

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

  togglePageRedirect = (link) => {
    this.props.dispatcher.header.redirect({
      link: link,
      params: {}
    });
  };

  render () {
    return (
      <div className={styles['g-main']}>
        about page
      </div>
    );
  }
}

AboutPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
