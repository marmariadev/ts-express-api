import { Router } from 'express';
import * as taskController from '../controllers/taskController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/tasks', authMiddleware, taskController.getTasks);
router.get('/tasks/:id', taskController.getTask);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;
