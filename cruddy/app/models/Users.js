import { Int32 } from "mongodb";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    age: {
        type: Int32, 
        required: true
    },
    profession: {
        type: String, 
        required: true
    },
    IsMarried: {
        type: Boolean, 
        required: false
    }
});

export default mongoose.models.messages || mongoose.model("messages", UserSchema)