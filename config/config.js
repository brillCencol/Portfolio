import dotenv from 'dotenv'

dotenv.config()

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_SECRET_KEY',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mernproject'  // fallback if env not set
}

export default config
