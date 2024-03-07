import express from 'express';
import taskRoutes from './routes/taskRoutes';

const app = express();

app.use(express.json());
app.use('/api', taskRoutes);

export default app;
