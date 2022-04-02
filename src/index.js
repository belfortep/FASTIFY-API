const dotenv = require('dotenv').config()
const swagger = require('./utils/swagger')
require('./utils/db')
const productsRoutes = require('./routes/products')
const fastify = require('fastify')({
    logger:true //ver informacion del servidor
})


fastify.register(require('fastify-swagger'), swagger.options)

productsRoutes.forEach(route => {
    fastify.route(route)
})

const start = async ()=>{

    await fastify.listen(3000)
    fastify.log.info('Server on ' + fastify.server.address().port)

}

start()