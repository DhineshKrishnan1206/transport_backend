const FormEntry = require('../models/entry');
const mongoose = require('mongoose');
// Handler for POST request to submit form data
exports.submitForm = async (req, res) => {
    try {
        const {
            loadName,
            fromPoint,
            toPoint,
            truckNo,
            weight,
            totalFreightCharges,
            advance,
            toPay,
            byTransport,
            ownerName,
            ownerPhoneNumber,
            driverName,
            driverNumber,
            modeOfPayment,
            date
        } = req.body;

        const newEntry = new FormEntry({
            loadName,
            fromPoint,
            toPoint,
            truckNo,
            weight,
            totalFreightCharges,
            advance,
            toPay,
            byTransport,
            ownerName,
            ownerPhoneNumber,
            driverName,
            driverNumber,
            modeOfPayment,
            date: date ? new Date(date) : undefined
        });

        await newEntry.save();
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error saving form data' });
    }
};

// Handler for GET request to retrieve all form entries
exports.getAllEntries = async (req, res) => {
    try {
        const entries = await FormEntry.find();
        res.status(200).json(entries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving form entries' });
    }
};


// Handler for GET request to retrieve a single form entry by ID
exports.getEntryById = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ID
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        const entry = await FormEntry.findById(id);

        if (!entry) {
            return res.status(404).json({ error: 'Entry not found' });
        }

        res.status(200).json(entry);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving form entry' });
    }
};