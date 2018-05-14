'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525946444576_1662';

  // add your config here
  config.middleware = [];

  // nunjucks视图插件
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
    root: [
      path.join(appInfo.baseDir, 'app/views'),
      path.join(appInfo.baseDir, 'app/admin'),
    ].join(','),
  };

  // 数据库的配置
  config.mysql = {
    // 单实例数据库配置
    client: {
      // host
      host: '47.93.54.212',
      // 端口号
      port: '3306',
      // 用户名
      user: 'sky300',
      // 密码
      password: 'sky185959',
      // 数据库名
      database: 'cms',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};
