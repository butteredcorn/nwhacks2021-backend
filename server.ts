import database from './src/database/database'
import dotenv from 'dotenv'
import _app from './src/app'

dotenv.config()

// pass app its dependencies:
const app = _app(database)
const port = process.env.PORT || 8080 

app.listen(port , () => {
    console.log(`Listening to the port ${port}`)
})
