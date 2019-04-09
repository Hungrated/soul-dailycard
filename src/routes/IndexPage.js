import React from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage/IndexPage.less';

// import { Button } from 'antd-mobile';
// import 'antd-mobile/lib/button/style'

function IndexPage () {
  return (
    <div>
      <p className={styles.title}>IndexPage</p>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
