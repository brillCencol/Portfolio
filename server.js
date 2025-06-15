import config from './config/config.js'
import app from './server/express.js'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

mongoose.connect(config.mongoUri)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Could not connect to MongoDB:', err.message))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Portfolio API. Powered by Express + Mongoose" })
})

app.listen(config.port, (err) => {
  if (err) {
    console.error('❌ Server failed to start:', err)
  } else {
    console.info(`🚀 Server running on port ${config.port}`)
  }
})
