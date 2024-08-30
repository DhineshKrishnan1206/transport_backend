const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const entrySchema = new Schema({
    loadName: { type: String, required: true },
    fromPoint: { type: String, required: true },
    toPoint: { type: String, required: true },
    truckNo: { type: String, required: true },
    weight: { type: Number, required: true },
    totalFreightCharges: { type: Number, required: true },
    advance: { type: Number, required: true },
    toPay: { type: Number, required: true },
    byTransport: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerPhoneNumber: { type: String, required: true },
    driverName: { type: String, required: true },
    driverNumber: { type: String, required: true },
    modeOfPayment: { type: String, required: true },
    date: { type: Date, default: Date.now } // Add date field
});


const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;
