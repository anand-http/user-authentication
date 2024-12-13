import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

dotenv.config();


app.get('/',(req,res)=>{
    res.json({
        msg:"hello world"
    })
})

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
}))

//routes
app.use('/api',userRoutes);;





export default app;