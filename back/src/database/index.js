const mongoose = require("mongoose")
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado ao banco de dados"))
.catch(err => console.log(`Erro ao conectar ao banco de dados ${err}`))