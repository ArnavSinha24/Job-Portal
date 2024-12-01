import express from 'express';
import dotenv from 'dotenv';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

dotenv.config();

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }));
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const DB_URI = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@job-portal.4zinb.mongodb.net/`;

dbConnection(DB_URI);


