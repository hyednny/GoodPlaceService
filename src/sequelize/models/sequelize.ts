import { Sequelize } from "sequelize";
import config from "config";

const database = config.get<string>("DATABASE");
const username = config.get<string>("DB_USERNAME");
const password = config.get<string>("DB_PASSWORD");

export const sequelize = new Sequelize(database, username, password, {
  host: config.get<string>("DB_HOST"),
  dialect: "mysql",
  timezone: config.get<string>("DB_TIMEZONE"),
  dialectOptions: { ssl: { rejectUnauthorized: true } },
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
