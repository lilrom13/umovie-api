/**
 * Created by romain on 2016-12-05.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rateSchema = new Schema({
    trackId: String,
    userId: String,
    userEmail: String,
    rate: Number,
    posted_at: { type: Date, default: Date.now },
    comment: String
});

var Rate = mongoose.model('Rate', rateSchema);

exports.schema = rateSchema;
exports.model = Rate;