import Router from 'koa-router'
const list = new Router();

list.get('/', async (ctx)=>{
    ctx.body = "列表页";
})

export default list;