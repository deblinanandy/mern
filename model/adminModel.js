import mongoose from "mongoose";

export const AdminSchema = new mongoose.Schema({
   
    password: {
        type: String,
        required: [true, "Please enter your password"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
   
});



export default mongoose.model("Admin", AdminSchema);
