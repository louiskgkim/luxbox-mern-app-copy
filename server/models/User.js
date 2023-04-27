const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, '{PATH} already exist. Please enter another email address.'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email address."
        }
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [4, "Password must be at least {MINLENGTH} characters long."]
    }
}, { timestamps: true });

// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
    try {
        if (this.isNew || this.isModified('password')) {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(this.password, saltRounds);
            this.password = hashedPassword;
        }
        next();
    } catch (err) {
        console.log("error in save", err);
    }
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.plugin(uniqueValidator, { message: '\'{VALUE}\' is already in use. Try another name.' });

const User = model('User', userSchema);

module.exports = User;