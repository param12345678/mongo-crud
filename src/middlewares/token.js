// src/services/tokenService.js
import jwt from 'jsonwebtoken';

// Secret key for signing and verifying tokens
const secretKey = process.env.JWT_SECRET_KEY || 'yourSecretKey'; // Replace with a strong and secure secret key

// Function to create a JWT token
export const createToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '8h' }); // Token expires in 1 hour
};

// Function to verify a JWT token
export const verifyToken = (req, res, next) => {

    try {
        let token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        token = token.replace("Bearer ", "")
        const temp = jwt.verify(token, secretKey);
        req.decoded = temp;

        next();

    } catch (err) {
        console.log("Error:", err);
        return res.status(400).send({ stausCode: 0, data: err.toString() });
    }
};
export const adminToken = (req, res, next) => {

    try {
        let token = req.body.token || req.query.token || req.headers["x-access-token"] || req.headers["authorization"];
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        token = token.replace("Bearer ", "")
        const temp = jwt.verify(token, secretKey);
        req.decoded = temp;
        if (temp.role == "admin") {
            next();
        }
        else {
            return res.status(401).send("You have no access to admin route");
        }

    } catch (err) {
        console.log("Error:", err);
        return res.status(400).send({ stausCode: 0, data: err.toString() });
    }
};
