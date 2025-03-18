const { Schema, model, } = require('../connections');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    specialties: String,
    experience: Number,
    location: String,
    about: String,
    password: { type: String, require: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('doctor', mySchema);
