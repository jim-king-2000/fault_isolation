import Koa from 'koa';
import Router from '@koa/router';
import koaBody from 'koa-body';
import { upload } from './upload.mjs';

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => ctx.body = 'test');
router.post('/upload', koaBody(), async (ctx) => ctx.body = await upload(ctx));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000);