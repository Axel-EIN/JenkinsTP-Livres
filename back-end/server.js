import express from 'express';
import cors from 'cors';
import './models/index.js';
import routerLivre from './routes/livre.route.js';
import { env } from './config/env.js';

const app = express();
const PORT = env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api/livre", routerLivre);

app.listen(PORT, () => {
  console.log(`Ecoute sur l'adresse http://localhost:${PORT}`);
})