// const database = require('./database/firebase')
require('dotenv').config()

// pass app its dependencies:
const app = require('./src/app')()

const port = process.env.PORT || 8080 

app.listen(port , () => {
    console.log(`Listening to the port ${port}`)
});