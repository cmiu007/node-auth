const express = require('express')
const router = require('express-promise-router')()
const passport = require('passport')
const passportConf = require('../passport')

const { validateBody, schemas} = require('../helpers/routeHelpers')
const UserController = require('../controllers/users')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UserController.signup)

router.route('/signin')
    .post(validateBody(schemas.authSchema), passport.authenticate('local', { session: false}), UserController.signin)

router.route('/secret')
    .get(passport.authenticate('jwt', { session: false}), UserController.secret)

module.exports = router