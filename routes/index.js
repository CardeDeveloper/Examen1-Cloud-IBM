var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen CLOUD' });
});

router.get('/autor', function(req, res, next) {
  res.json({ alumno: 'OACA' , servicio:"Cloud Foundry en IBM Cloud"});
});

router.post('/tone', function(req, res, next) {
  res.json({ alumno: 'OACA' , servicio:"Cloud Foundry en IBM Cloud"});
});


module.exports = router;
