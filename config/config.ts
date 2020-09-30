/*
 * @Description: 
 * @Version: 2.0
 * @Autor: dragon
 * @Date: 2020-09-29 10:56:07
 * @LastEditors: dragon
 * @LastEditTime: 2020-09-30 19:26:24
 */
// https://umijs.org/config/
import { defineConfig } from 'umi';
// import defaultSettings from './defaultSettings';
import proxy from './proxy';
import aliyunTheme from '@ant-design/aliyun-theme';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './ListTableList',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    // 'primary-color': defaultSettings.primaryColor,
    ...aliyunTheme,
    'layout-header-background': '#FFFFFF',
    'layout-header-color': '#DEDEDE',
    'layout-sider-background-light': '#F5F5F5',
    'layout-trigger-color-light': '#DEDEDE',
    'menu-bg': '#F5F5F5',
    'menu-item-active-bg': '#DEDEDE',
    'tooltip-color': '#404040',
    'tooltip-bg': 'rgba(255, 255, 255, 0.85)'
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
