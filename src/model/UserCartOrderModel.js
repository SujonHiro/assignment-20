const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // ... (your user schema fields)
});

// Define the 'remove' middleware to remove associated cart items and orders


userSchema.virtual('cartItems', {
    ref: 'CartItem',
    localField: '_id',
    foreignField: 'user'
});

userSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'user'
});

const User = mongoose.model('User', userSchema);

module.exports = User;
