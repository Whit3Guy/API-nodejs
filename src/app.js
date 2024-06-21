import express from 'express';
import {routes} from './routes.js'
import { createTable } from './controllers/users.js';
const porta = 3301;
const app = express();



createTable();

app.use(routes)


app.listen(porta, (error)=>{
    console.log(error || "API subiu")
})