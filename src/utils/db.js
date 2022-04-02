const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log('connected DB'))
    .catch((err)=> console.log(err))