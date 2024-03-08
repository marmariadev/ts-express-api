import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const DB = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_DATABASE,
};
