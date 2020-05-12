import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    make: {
        type: String,
        required: 'Must Enter Make'
    },
    model: {
        type: String,
        required: 'Must Enter Model'
    },
    year: {
        type: Number,
        required: 'Must Enter Year'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});