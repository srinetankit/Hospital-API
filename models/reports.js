// Importing the mongoose library 
const mongoose = require('mongoose');

// Defining the schema for the reports model
const reportSchema = new mongoose.Schema({
    createdByDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        require: true,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine',
            'Positive-Admit']
    },
    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
}
)

// Creating the Reports model using the defined schema
const Reports = mongoose.model('Reports', reportSchema);

module.exports = Reports;