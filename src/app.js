module.exports = (database) => {
    const express = require('express')
    const app = express()
    const apiRoute = require('./routes/api')(database)
    const path = require('path')
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))


    app.use('/api' , apiRoute)

    // app.get("*", (req, res) => {
    //   res.sendFile(path.resolve("./public/build", "index.html"));
    // });

    return app
} 