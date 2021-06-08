const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index')

router.get('/:code/stats', indexController.status)
router.get('/:code', indexController.caminho)
router.get('/', indexController.show);
router.post('/new', indexController.encurta)

module.exports = router;
