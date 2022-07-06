import mongoose from 'mongoose';

const mongoUrl = 'mongodb://106.14.249.162:27017/';
await mongoose.connect(mongoUrl);
console.log(`Mongoose connected to ${mongoUrl}`);

export async function upload(ctx) {
  console.log(ctx.request.body);
  return 'upload';
}