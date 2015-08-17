var express = require('express');
var router = express.Router();

// controllers

var quizController = require ('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Definición de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

// Ampliación para admitir a los autores
router.get('/author', function(req, res, next){
	res.render('author', { autor: 'Jose María Muñoz',
						photo: 'images/author.jpg'});
});

module.exports = router;
