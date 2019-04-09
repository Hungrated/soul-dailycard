import React from 'react';
import { connect } from 'dva';

import { Button } from 'antd-mobile';
import 'antd-mobile/lib/button/style'

import styles from '../styles/IndexPage/IndexPage.less';

function IndexPage () {
  return (
    <div>
      <p className={styles.title}>Hello!</p>
      <Button type={'primary'}>demo</Button>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
