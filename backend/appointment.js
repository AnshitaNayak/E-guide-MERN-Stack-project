const mongoose = require('mongoose');

// Define the appointment schema
const appointmentSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        isReminded: {
            type: Boolean
        }
    },
    { collection: 'appointment-data' }
);

// Create the appointment model
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;