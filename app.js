
// 1. IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMOS
import express, { application } from 'express';
import dotenv from 'dotenv';
import { connectionMongo } from './src/config/dataBase.js';
import usersRouter from './src/routes/user.routes.js';
import loginRouter from './src/routes/login.routes.js';
import cors from 'cors';

// 2. configurar el uso de nuestro servidor y dependencias
const app = express();
connectionMongo();
app.use(cors());

// Le indico las rutas que debe utilizar
app.use(express.json());
app.use('/usuarios', usersRouter);
app.use('/iniciarSesion', loginRouter);

console.log("Mongo URI:", process.env.MONGODB_URI);

export default app;