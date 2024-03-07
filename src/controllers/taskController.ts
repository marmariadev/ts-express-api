import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const getTasks = (req: Request, res: Response) => {
  res.json(taskService.findAll());
};

export const getTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const task = taskService.find(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
};

export const createTask = (req: Request, res: Response) => {
  taskService.create(req.body);
  res.status(201).send('Task created');
};

export const updateTask = (req: Request, res: Response) => {
  taskService.update(req.body);
  res.send('Task updated');
};

export const deleteTask = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  taskService.remove(id);
  res.send('Task deleted');
};
