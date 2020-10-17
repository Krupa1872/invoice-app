var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
    discount: { type: Number},
    finalTotal: {type: Number},
    selectt: {type: String}
});

module.exports = mongoose.model('country',countrySchema);
