import dotenv from 'dotenv'
import path from 'path'

// ✅ Explicitly load .env from root even if cwd is /client
dotenv.config({ path: path.resolve(process.cwd(), '../.env') })

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',
  mongoUri: process.env.MONGODB_URI || `mongodb://localhost:27017/mernproject`
}

export default config
