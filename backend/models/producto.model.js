const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        idProduct: {
            type: Number,
            required: true            
        },
        productName: {
            type: String,
            required: true,
            trim: true
        },
        productType: {
            type: String,
            required: true,
            enum: ["INFANTIL", "MUJER", "HOMBRE"]
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        size: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Product = mongoose.model("producto", productSchema);

module.exports = Product;