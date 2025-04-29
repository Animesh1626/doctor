
const { Schema, model, Types } = require('../connections');

const mySchema = new Schema({
    doctor: { type: Types.ObjectId, ref: 'doctor' },
    time: String,
    date: { type: Date },
    booked: { type: Boolean, default: false }
});

module.exports = model('slot', mySchema);
