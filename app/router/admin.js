'use strict';

module.exports = app => {
	const { router, controller } = app;
  router.get('/admin/login', controller.admin.login.index);
  router.get('/admin/home', controller.admin.home.index);
};
