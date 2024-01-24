import config from "config";
import { log } from "../utils/logger";
import { sequelize } from "../sequelize/models/sequelize";

export async function connectToDatabase() {
  const host = config.get<string>("DB_HOST");
  const database = config.get<string>("DATABASE");

  try {
    log.info(`Connecting to database at ${host}-${database}`);
    await sequelize.authenticate();
    log.info("Database Connection has been established successfully");

    log.info("Syncing the database...");
    await sequelize.sync({ force: false });
    // true -> 항상 테이블 삭제 후 재생성, false -> 테이블이 존재하면 넘어가고 없으면 생성
    log.info("Syncing completed successfully");
  } catch (e: any) {
    log.error(e);
    process.exit(1);
  }
}
