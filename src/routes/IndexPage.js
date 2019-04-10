import React from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage/IndexPage.less';

// import { Button } from 'antd-mobile';
// import 'antd-mobile/lib/button/style'

function IndexPage () {
  return (
    <div className={styles['g-main']}>
      <p className={styles['m-title']}>demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo demo demo demo demo demo demo demo demo demo demo
        demo demo demo demo</p>
      <div className={styles['m-add']}>
        +
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
