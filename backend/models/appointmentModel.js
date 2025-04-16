//slot id 
//patient id 
//status
//created at

const { Schema, model, Types } = require('../connections');

const mySchema = new Schema({
    slot: { type: Types.ObjectId, ref: 'slot' },
    patient: { type: Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' },
    cancel: { type: Boolean, default: false }
});

module.exports = model('appointment', mySchema);
