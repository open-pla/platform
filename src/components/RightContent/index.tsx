import { Tooltip, Tag, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light';

const ENVTagColor = {
  dev: 'orange',
  test: 'green',
  pre: '#87d068',
};

const GlobalHeaderRight: React.FC<{}> = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const {layout } = initialState.settings;
  let className = styles.right;

  if ((layout === 'top') || layout === 'mix') {
    className = `${styles.right}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="搜索文档、控制台、API、解决方案和资源"
        options={[
          {
            label: <a href="">文档</a>,
            value: '文档',
          },
          {
            label: <a href="">API</a>,
            value: 'API',
          },
          {
            label: <a href="">解决方案和资源</a>,
            value: '解决方案和资源',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <Tooltip title="使用文档">
        <span style={{background: 'red', color: 'green'}}
          className={styles.action}
          onClick={() => {
            window.location.href = 'https://pro.ant.design/docs/getting-started';
          }}
        >
          <QuestionCircleOutlined />
        </span>
      </Tooltip>
      <Avatar />
      {REACT_APP_ENV && (
        <span>
          <Tag color={ENVTagColor[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>
        </span>
      )}
      {/* <SelectLang className={`${styles.action}`}/> */}
    </Space>
  );
};
export default GlobalHeaderRight;
