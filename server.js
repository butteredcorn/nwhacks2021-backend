const database = require('./src/database/database.ts')
require('dotenv').config()



// pass app its dependencies:
const app = require('./src/app')(database)

const port = process.env.PORT || 8080 

app.listen(port , () => {
    console.log(`Listening to the port ${port}`)
});