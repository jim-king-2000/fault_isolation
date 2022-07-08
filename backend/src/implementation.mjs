import mongoose from 'mongoose';

const faultIsolationSchema = new mongoose.Schema({
  board: { type: String, required: true, index: true },
  test: { type: String, required: true, index: true },
  error: { type: String, required: true, index: true },
  userPattern: { type: String, required: true, index: true },
  tip: { type: String, required: true },
  commands: String,
});
faultIsolationSchema.index({ board: 1, test: 1, userPattern: 1, tip: 1}, { unique: true});

const FaultIsolation = mongoose.model('faultIsolation', faultIsolationSchema);

export async function upload(ctx) {
  console.log('upload', ctx.request.body);

  try {
    const newItem = new FaultIsolation(ctx.request.body);
    await newItem.save();
  } catch (e) {
    console.error(e);
  }

  return JSON.stringify({ result: 'OK' });
}