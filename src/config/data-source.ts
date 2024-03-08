import { DataSource } from "typeorm";
import { DB } from "./enviroment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB.HOST,
    port: parseInt(DB.PORT ?? "5432"), // Convert the port to a number and provide a default value
    username: DB.USERNAME,
    password: DB.PASSWORD,
    database: DB.DATABASE,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: [],
});
