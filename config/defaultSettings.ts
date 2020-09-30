/*
 * @Description: 
 * @Version: 2.0
 * @Autor: dragon
 * @Date: 2020-09-29 10:56:07
 * @LastEditors: dragon
 * @LastEditTime: 2020-09-30 17:34:04
 */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'Iot',
  pwa: false,
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
