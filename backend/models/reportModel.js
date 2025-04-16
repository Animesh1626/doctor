const { Schema, model, Types } = require('../connections');

const mySchema = new Schema({
    appointment: { type: Types.ObjectId, ref: 'appointment' },
    prescription: { type: String, required: true },
    description: { type: String },
    suggestedTests: { type: String },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('report', mySchema);
