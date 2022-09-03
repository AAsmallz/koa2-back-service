// 引入路由
import Router from 'koa-router'
// 创建实例
const router = new Router();
// 路由模块化设计
import errorPage from './modules/errorPage.js';
import home from './modules/home.js';
import list from './modules/list.js';

// 路由安装
router.use('/404', errorPage.routes(), errorPage.allowedMethods());
router.use('/home', home.routes(), home.allowedMethods());
router.use('/list', list.routes(), list.allowedMethods());

export default router;