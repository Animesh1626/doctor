const { Schema, model, } = require('../connections');

const mySchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, require: true },
    city: { type: String, default: 'unknown' },
    createdAt: { type: Date, default: Date.now },
    lastName: String,
    phone: Number,
    dateOfBirth: { type: Date},
    gender: String,
    address: String,
    state: String,
    zipCode: Number,
    height: Number,
    weight: Number,
    allergies: String,
    medications: String,
    emergencyContactName: String,
    emergencyContactPhone: Number,
    emergencyContactRelation: String
});

module.exports = model('user', mySchema);