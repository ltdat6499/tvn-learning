const Router = require('koa-router')
const _ = require('../controllers/users')
const passport = require('../middleware/passport')


const router = new Router({ prefix: '/users' })

router.post('/login', _.login)
router.get("/", passport.jwtPassport, _.getAll)
router.post("/create", passport.jwtPassport, _.create)
router.post("/update/:id", passport.jwtPassport, _.update)
router.post("/delete/:id", passport.jwtPassport, _.delete)

module.exports = router
