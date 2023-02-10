const path = require("path");


const controller = {
    /* Esun OBJETO por lo que "Main" es un METODO */
    main:(req,res) => {
        return res.sendFile(path.join(__dirname,"../views/home.html")); /* return: es para que corte la ejecución */
    },

    about: (req,res) => {
        return res.sendFile(path.join(__dirname, "../views/about.html"));
    }

}

module.exports = controller;