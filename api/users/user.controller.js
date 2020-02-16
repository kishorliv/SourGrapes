const express = require('express');
const router = express.Router();

const userService = require('./user.service');
const verifyToken = require('../_middlewares/verifyAuth');

// routes
router.get('/getAll', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.post('/add', verifyToken, add);

module.exports = router;


function getAll(req, res, next){
    userService.getAll()
    .then(user => res.send({user}))
    .catch(err => next(err));
}

function getById(req, res, next){
    userService.getById(req.params.id)
    .then(user => user ? res.send({user}) : res.status(404).send({message: 'User not found.'}))
    .catch(err => next(err));  
}

function add(req, res, next){
    userService.add(req.body)
    .then(user => user ? res.status(201).send(user) : res.status(400).send({message: 'User cannot be created'}))
    .catch(err => next(err));
}
