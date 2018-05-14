'use strict';
const adminRouter = require('./router/admin');
const webSiteRouter = require('./router/webSite');

module.exports = app => {
  webSiteRouter(app);
  adminRouter(app);
};
