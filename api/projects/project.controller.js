const express = require('express');
const router = express.Router();

const projectService = require('./project.service');
const verifyToken = require('../_middlewares/verifyAuth');

// routes
router.get('/getAll', verifyToken, getAll);
router.get('/:id', verifyToken, getById);
router.post('/add', verifyToken, add);

module.exports = router;


function getAll(req, res, next){
    projectService.getAll()
    .then(projects => res.send({projects}))
    .catch(err => next(err));
}

function getById(req, res, next){
    projectService.getById(req.params.id)
    .then(project => project ? res.send({project}) : res.status(404).send({message: 'Prpject not found.'}))
    .catch(err => next(err));  
}

function add(req, res, next){
    projectService.add(req.body)
    .then(project => project ? res.status(201).send(project) : res.status(400).send({message: 'Project cannot be created'}))
    .catch(err => next(err));
}
