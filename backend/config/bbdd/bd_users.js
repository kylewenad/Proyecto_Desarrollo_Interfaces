db.zapatos.insertMany([
    {
        username:"",
        email:"",
        password:""/*,
        rol: {
            type: String,
            required: true,
            trim: true,
            enum: ["CLIENTE", "SOPORTE", "ADMINISTRADOR"]
        },*/
    }
]);

module.exports = users;