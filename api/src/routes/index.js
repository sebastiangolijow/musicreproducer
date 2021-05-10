const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons')



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//router.use('/api', tipos)
router.use('/', pokemons)


module.exports = router;
