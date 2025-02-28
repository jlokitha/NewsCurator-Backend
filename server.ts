import express from 'express';
// @ts-ignore
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.listen(5000, (err) => {
    console.log('Server is running on port 5000');
});
