export default (database) => {
    const express = require('express')
    const app = express()
    const apiRoute = require('./routes/api')(database)
    const path = require('path')
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public/build'))

    const cors = require('cors')

    var corsOptions = {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200
    }
    app.use(cors(corsOptions));

    app.get('/', (req,res) => {
        res.redirect('/api')
    })

    app.use('/api' , apiRoute)

    app.get("*", (req, res) => {
      res.sendFile(path.resolve("./public/build", "index.html"));
    });

    return app
}
