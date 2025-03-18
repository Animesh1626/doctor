const { Schema, model, } = require('../connections');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, require: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('user', mySchema);