import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '../.env') })  // or just dotenv.config() for Render

const config = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'yourSecret',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/mernproject'
}

export default config
