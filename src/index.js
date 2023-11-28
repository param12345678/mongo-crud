import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import swaggerUi from "swagger-ui-express";
import * as swaggerFile from "./swagger-output.json";
import connectDB from './connectDB/db';


const app = express();
const PORT = process.env.PORT || 4001;
// Middleware
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, './uploads')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, './helper', 'emailTemplates'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());


// Connect to MongoDB
connectDB();


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', require('./routes/index')) // routes

// Swagger
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
