const router = require('express').Router()
const mongoose = require('mongoose')
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

router.delete('/:id/comment', (req, res) => {
  db.Place.findByIdAndDelete({"_id": req.params.id})
  .then((place) => {
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
  console.log(req.params.id)
  db.Place.findOne({"_id": req.params.id})
  .populate('comments')
  .then((place) => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// UPDATE
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete({"_id": req.params.id})
  .then((place) => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// EDIT
router.get('/:id/edit', (req, res) => {
  db.Place.findById({"_id": req.params.id})
  .then((place) => {
    res.render('places/edit', { place })
  })
  .catch(err => {
    res.render('error404')
  })
})

module.exports = router