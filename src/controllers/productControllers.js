const Product = require('../models/Products')

const getProducts = async(request, reply) =>{ //fastify en documentacion usa request, reply. No req, res
    const products = await Product.find()
    return reply.code(200).send(products)
}

const getProduct = async (request,reply)=>{
    try{
        const product = await Product.findById(request.params.id)
        if (product){
            return reply.code(200).send(product)
        }else {
            return reply.code(404).send('Product not found')
        }

   
    }catch(err){
        console.log(err)
    }
    
}

const createProduct = async(request, reply) =>{
    const newProduct = new Product(request.body)

    await newProduct.save()

    return reply.code(201).send(newProduct)

}

const deleteProduct = async(request, reply) =>{
    try{

        const deletedProduct = await Product.findByIdAndDelete(request.params.id)

        if(deletedProduct){

            return reply.code(200).send(deletedProduct)

        }else{
            return reply.code(404).send('Product not found')
        }

    }catch(err){
        console.log(err)
    }
}
const updateProduct = async (request,reply)=>{
    try{

        const updatedProduct = await Product.findByIdAndUpdate(request.params.id, request.body, {new:true})
        
        
        if(updatedProduct){
            return reply.code(200).send(updatedProduct)
        }else{
            return reply.code(404).send('Product not found')
        }

    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct
    
}