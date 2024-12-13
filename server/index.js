import app from './app.js';
import connectDb from './db.js';

const port = process.env.PORT || 3000;

connectDb();

app.listen(port,()=>{
    console.log("Server is running on port",port);
})