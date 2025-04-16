const express = require('express');
const Model = require('../models/reportModel');
const verifyToken = require('../middleware/verifyToken');


const router = express.Router();

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//getall
router.get('/getall', (req, res) => {
    Model.find().populate({path: 'appointment', populate: {path: 'patient'}})
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

//getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id).populate({path: 'appointment', populate: {path: 'patient'}})
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//getbyid
router.get('/getbyappointment/:id', (req, res) => {
    Model.findOne({ appointment: req.params.id })
        .populate({
            path: 'appointment',
            populate: [
                { path: 'patient' }, // Populate the patient field
                { 
                    path: 'slot', 
                    populate: { path: 'doctor' } // Populate the doctor field inside slot
                }
            ]
        })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
//update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});
//delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;