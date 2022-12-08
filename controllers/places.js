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

// COMMENT
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
    console.log(place)
      db.Comment.create(req.body)
      .then(comment => {
        console.log(comment)
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
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