var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// review schema
var ReviewSchema = new Schema({
    reviewerName: {type: String, required: true},
    movieTitle: {type: String, required: true},
    quote: {type: String, require: true},
    rating: {type: Number, min: 1, max: 5, required: true}
});

// return the model
module.exports = mongoose.model('Review', ReviewSchema);