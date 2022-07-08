import Koa from 'koa';
import Router from '@koa/router';
import koaBody from 'koa-body';
import mongoose from 'mongoose';
import { upload } from './implementation.mjs';

const mongoUrl = 'mongodb://106.14.249.162:27017/test';
await mongoose.connect(mongoUrl);
console.log(`Mongoose connected to ${mongoUrl}`);

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => ctx.body = JSON.stringify({ x: 1 }));
router.post('/upload', koaBody(), async (ctx) => ctx.body = await upload(ctx));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000);