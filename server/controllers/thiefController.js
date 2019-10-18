const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var { Thief } = require('../models/thief');

// Function to get thieves
router.get('/', (req, res) => {
    Thief.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Thiefs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Thief.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Thief :' + JSON.stringify(err, undefined, 2)); }
    });
});

// Function to add new thief
router.post('/', (req, res) => {
    var th = new Thief({
        name: req.body.name,
        area: req.body.area,
        crime: req.body.crime,
        phone: req.body.phone,
    });
    th.save((err, doc) => {
        if (!err) { res.send(doc);console.log(doc) }
        else { console.log('Error in Thief Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

// Functiont to Update thief details
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var th = {
        name: req.body.name,
        area: req.body.area,
        crime: req.body.crime,
        phone: req.body.phone,
    };
    Thief.findByIdAndUpdate(req.params.id, { $set: th }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Thief Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

//  Functiont to delete thief
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Thief.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Thief Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;