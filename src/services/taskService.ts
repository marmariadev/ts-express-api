import { Task } from '../interfaces/taskInterface';

let tasks: Task[] = [
    { id: 1, title: 'Aprender TypeScript', description: 'Estudiar los fundamentos de TypeScript', completed: false, createdAt: new Date() },
    { id: 2, title: 'Crear una API RESTful', description: 'Desarrollar una API con Express y TypeScript', completed: false, createdAt: new Date() },
];

export const findAll = (): Task[] => {
  return tasks;
};

export const find = (id: number): Task | undefined => {
  return tasks.find(task => task.id === id);
};

export const create = (newTask: Task): void => {
  tasks.push(newTask);
};

export const update = (updatedTask: Task): void => {
  const index = tasks.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks[index] = updatedTask;
  }
};

export const remove = (id: number): void => {
  tasks = tasks.filter(task => task.id !== id);
};
