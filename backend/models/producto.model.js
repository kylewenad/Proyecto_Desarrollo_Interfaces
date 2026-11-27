const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    talla: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: 0
    }
}, { _id: false });

const productSchema = new mongoose.Schema(
    {
        _id: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        enum: ['INFANTIL', 'MUJER', 'HOMBRE'],
        required: true
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: [stockSchema],
        default: []
    }
    }
    ,
    {
        timestamps: true,
        versionKey: false
    }
)

const Product = mongoose.model("producto", productSchema);

module.exports = Product;