var express = require('express');
var router = express.Router();
var reviewcollection = require('./users');

const app = express();

app.use('/public', express.static('/public'));
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/write', (req, res, next) => {
  res.render('newReview')
});


router.get('/reviews', (req, res, next) => {
  reviewcollection.find()
  .then((data) => {
    res.render('readReview', {data});
  })  
})

router.post('/submit', (req, res) => {
  reviewcollection.create( {
    gamename: req.body.gamename,
    review: req.body.review
  })
  .then(() => {
    res.redirect('/reviews');
  });

});

router.get('/update/:id', (req, res) => {
  reviewcollection.findOne({_id: req.params.id})
  .then(function(game) {
    res.render('update', {game})
  })
});

router.post('/update/:id', (req, res) => {
  let updated = {
    gamename: req.body.gamename,
    review: req.body.review
  }
  reviewcollection.findOneAndUpdate({_id: req.params.id}, {'$set': updated}, {require: true})
  .then((updatedData) => {
    res.redirect('/reviews');
  })
})

router.get('/delete/:id', (req, res) => {
  reviewcollection.findOneAndDelete({
    _id : req.params.id
  })
  .then(() => {
    res.redirect('/reviews')
  })
});





module.exports = router;
