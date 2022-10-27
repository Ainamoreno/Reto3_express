const express = require('express')
const router = express.Router()

const CajasRoutes = require('./views/cajasRoutes')
const AlmacenesRoutes = require('./views/almacenesRoutes')


//middleware para las rutas de usuario
router.use('/cajas', CajasRoutes)
router.use('/alm', AlmacenesRoutes)


module.exports = router