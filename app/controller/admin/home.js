'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('home');
  }

  async center() {
    await this.ctx.render('center');
  }
}

module.exports = HomeController;