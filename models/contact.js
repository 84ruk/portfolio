const { Schema, model } = require("mongoose");

const ContactSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
});

module.exports = model("Contact", ContactSchema);
