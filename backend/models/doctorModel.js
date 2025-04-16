const { Schema, model, } = require('../connections');

const mySchema = new Schema({
    image: String,
    name: String,
    email: { type: String, unique: true },
    specialties: String,
    experience: Number,
    location: String,
    about: String,
    password: { type: String, require: true },
    city: { type: String, default: 'unknown' },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
    lastName: String,
    phone: Number,
    dateOfBirth: { type: Date },
    gender: String,
    specialization: String,
    licenseNumber: Number,
    yearsOfExperience: Number,
    medicalSchool: String,
    graduationYear: Number,
    residency: String,
    fellowship: String,
    languages: String,
    clinicName: String,
    timing: String,
    clinicAddress: String,
    city: String,
    state: String,
    zipCode: Number,
    officePhone: Number,
    biography: String,
    meetingLink: {type : String, default: 'https://meet.google.com/sqd-pooz-vsd'}, // Default meeting link
});

module.exports = model('doctor', mySchema);
