const {Schema, model} = require('mongoose')

const productSchema=new Schema({
    title: String,
    price: Number,
    image: String,
    description: String,
    quantity: Number,
}, {
    timestamps:true,
    versionKey: false   //le quita el __v en mongodb
})

module.exports = model('Product', productSchema)