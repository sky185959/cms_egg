'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index');
  }

  // 公司简介
  async profile() {
    await this.ctx.render('/about_us/profile');
  }

  async culture() {
    await this.ctx.render('/about_us/culture');
  }

  async honor() {
    await this.ctx.render('/about_us/honor');
  }

  async news() {
    await this.ctx.render('/news/company_news');
  }

  async industry() {
    await this.ctx.render('/news/industry_news');
  }

  async newsDetail() {
    await this.ctx.render('/news/news_detail');
  }

  async contact() {
    await this.ctx.render('contact_us');
  }
}

module.exports = HomeController;