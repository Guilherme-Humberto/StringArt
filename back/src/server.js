const { app } = require("./index")
const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Conectado ao servidor ${port}`))