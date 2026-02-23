const mongoose = require('mongoose')
const connectDB = async () => {
    try { 
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('mongodb connected')
    } catch (err) {
        console.error('mongodb connection error:', err.message)
        process.exit(1)
    }
}
module.exports = connectDB
