// src/middlewares/userValidator.js
import { body } from 'express-validator';

// Common email validation function
const validateEmail = (field) => {
    return body(field, "Invalid email")
        .exists()
        .isLength({ min: 1, max: 100 })
        .withMessage(`Please enter ${field} in between 1 to 100 characters.`)
        .isEmail();
};

export const signUpValidation = [
    body('username').notEmpty(),
    validateEmail('email'),
    body('password', "Invalid Password").isLength({ min: 5 }),
];

export const loginValidation = [
    validateEmail('email'),
    body('password', "Invalid Password").isLength({ min: 5 }),
];

export const forgotPasswordValidation = [
    validateEmail('email'),
];
