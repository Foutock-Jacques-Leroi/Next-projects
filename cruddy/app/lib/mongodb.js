// lib/mongodb.js
import mongoose from "mongoose"

const MONGODB = process.env.MONGODB

if (!MONGODB) throw new Error("Please define MONGODB in .env.local")

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToMongoDB() {
  if (cached.conn) return cached.conn

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB).then(m => m)
  }

  cached.conn = await cached.promise
  return cached.conn
}
console.log("MongoDB connection established")