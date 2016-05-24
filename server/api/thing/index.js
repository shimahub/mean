'use strict';

var express = require('express');
var controller = require('./thing.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);
router.put('/:id/star', auth.isAuthenticated(), controller.star);
router.delete('/:id/star', auth.isAuthenticated(), controller.unstar);

module.exports = router;
