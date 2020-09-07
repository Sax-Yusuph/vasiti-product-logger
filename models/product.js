var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    size: {type: Number, required: true, max: 100},
    color: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: String, required: true},
    images: {type: Array, required: false},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);


// "size":"32",
//"color":"Orange",
//"quantity":"15",
//"images":["image1", "image2"],
//"price":"23000"