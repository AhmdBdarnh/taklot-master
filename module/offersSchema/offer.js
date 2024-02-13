const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
      requestID: {
        type: Number,
        required: true
      },
      technicalID: {
        type: Number,
        required: true
      },
      bid: {
        type: Number,
        required: true
      },
      comments: {
        type: String,
        required: false
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
      }
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;
