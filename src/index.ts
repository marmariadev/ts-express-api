import app from './app';
import { PORT } from './config/enviroment';
import "reflect-metadata";
import { AppDataSource } from './config/data-source';

AppDataSource.initialize().then(() => {
  console.log('Base de datos conectada');
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
});

