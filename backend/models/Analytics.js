const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    totalRevenue: {
        type: Number,
        required: true
    },
    totalOrders: {
        type: Number,
        required: true
    },
    averageOrderValue: {
        type: Number,
        required: true
    },
    customerCount: {
        type: Number,
        required: true
    },
    topItems: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;