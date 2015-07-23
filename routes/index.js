var express = require('express');
var router = express.Router();

// controllers

var quizController = require ('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/author', function(req, res, next){
	res.render('author', { autor: 'Jose María Muño9z',
						photo: 'images/author.jpg'});
});

module.exports = router;
