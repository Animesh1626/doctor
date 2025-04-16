const express = require('express');
const Model = require('../models/appointmentModel');
const SlotModel = require('../models/slotModel');
const verifyToken = require('../middleware/verifyToken');


const router = express.Router();

router.post('/add', verifyToken, (req, res) => {
    req.body.patient = req.user._id;
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
            SlotModel.findByIdAndUpdate(req.body.slot, { booked: true })
                .then((result) => {
                    console.log(result);
                }).catch((err) => {
                    console.log(err);
                });
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//getall
router.get('/getall', (req, res) => {
    Model.find().populate({path: 'user', path: 'slot', populate: {path: 'doctor'}}).populate('patient')
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

});

//getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id).populate({path: 'user', path: 'slot', populate: {path: 'doctor'}}).populate('patient')
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