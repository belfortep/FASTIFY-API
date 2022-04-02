exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger:{
        info:{
            title: 'Fastify Mongodb API',
            description: 'API con node.js, fastify y mongodb',
            version:'0.0.1'
        },
        externalDocs:{
            url: 'https://swagger.io',
            description : 'Mas info...'
        }
    },
    host:'localhost:3000',
    schemas: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
}