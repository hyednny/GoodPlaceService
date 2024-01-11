import { Sequelize } from "sequelize-typescript";
import config from "config";
import { User } from "./user";

const database = config.get<string>("DATABASE");
const username = config.get<string>("DB_USERNAME");
const password = config.get<string>("DB_PASSWORD");

export const sequelize = new Sequelize(database, username, password, {
  dialect: "mysql",
  timezone: config.get<string>("DB_TIMEZONE"),
  dialectOptions: { ssl: { rejectUnauthorized: true } },
  replication: {
    read: [
      { host: config.get<string>("DB_HOST"), username, password },
      { host: config.get<string>("DB_HOST"), username, password },
    ],
    write: { host: config.get<string>("DB_HOST"), username, password },
  },
  models: [User],
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
