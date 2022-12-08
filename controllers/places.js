// const { application } = require('express')

const router = require('express').Router()
const mongoose = require('mongoose')

// const places = require('../models/places.js')
const db = require('../models')

// INDEX
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// CREATE
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW
router.get('/:id', (req, res) => {
  db.Place.findOne({"id": req.params.id})
  .populate('comments')
  .then((place) => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id')
})

// DELETE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// EDIT
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

module.exports = router