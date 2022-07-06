import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => ctx.body = 'test');
router.get('/upload', (ctx) => ctx.body = 'upload');

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000);