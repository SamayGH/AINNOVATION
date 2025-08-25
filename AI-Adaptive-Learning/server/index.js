import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import translateRouter from './routes/translate.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.json({ ok: true, name: 'AI Adaptive Learning API' }));
app.use('/users', usersRouter);
app.use('/translate', translateRouter);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
