var express = require('express');
var router = express.Router();
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen CLOUD' });
});

router.get('/autor', function(req, res, next) {
  res.json({ alumno: 'OACA' , servicio:"Cloud Foundry en IBM Cloud"});
});

router.post('/tone', function(req, res, next) {
  if(req.body.msg){
  const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21' ,
    authenticator: new IamAuthenticator({
      apikey: process.env.APIKEY_TONE,
    }),
    serviceUrl: process.env.URL_TONE,
  });
  const text = req.body.msg

  const toneParams = {
    toneInput: { 'text': text },
    contentType: 'application/json',
  };

  toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
      res.status(200).json(toneAnalysis.result);
      console.log(JSON.stringify(toneAnalysis, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
      res.status(500).json({ error: err, servicio:"tone analyzer"});
      
    });
  }else{
    res.status(400).json({ error: 'Debes enviar msg en el body de la peticion' , servicio:"tone analyzer"});
  }
  

});


module.exports = router;
