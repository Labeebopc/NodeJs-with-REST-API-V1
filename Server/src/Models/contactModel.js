// schema setup
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String
    },                                            
    password: {
        type: String                            // Visit mongoose docs for different Schema types          
    },
    created_date: {
        type: Date,
        default: Date.now                       // The date will set automatically 
    }


})

