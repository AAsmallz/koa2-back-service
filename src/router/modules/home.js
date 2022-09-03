import Router from "koa-router";
const home = new Router();

// 这里的 '/' 就是指向 index.js 中的 /home
home.get("/", async (ctx) => {
  ctx.body = "首页";
});

export default home;
