var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('GET route on things.');
});
router.post('/', function(req, res){
	res.send('POST route on things.');
});
//ambos parametros obligatorios
router.get('/:id/:name', function(req, res){
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);});

//errores
router.get('*', function(req, res){
        res.send('URL Invalida.');
    });

    

module.exports = router;
