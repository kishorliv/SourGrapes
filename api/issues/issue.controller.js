const express = require('express');
const router = express.Router();

const issueService = require('./issue.service');
const verifyToken = require('../_middlewares/verifyAuth');

// routes
router.get('/getAll', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.post('/add', verifyToken, add);

module.exports = router;


function getAll(req, res, next){
    issueService.getAll()
    .then(issues => res.send({issues}))
    .catch(err => next(err));
}

function getById(req, res, next){
    issueService.getById(req.params.id)
    .then(issue => issue ? res.send({issue}) : res.status(404).send({message: 'Issue not found.'}))
    .catch(err => next(err));  
}

function add(req, res, next){
    issueService.add(req.body)
    .then(issue => issue ? res.status(201).send(issue) : res.status(400).send({message: 'Issue cannot be created'}))
    .catch(err => next(err));
}
