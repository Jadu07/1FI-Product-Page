require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/products', productRoutes)

// Export for Vercel serverless — only listen locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Server running at http://localhost:3000'))
}

module.exports = app