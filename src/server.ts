import { initializeSever } from "./app";
import { connectToDatabase } from "./loader/database";
import { log } from "./utils/logger";

const port = 3000;

const app = initializeSever();

const initialize = async () => {
  try {
    app.listen(port, async () => {
      log.info(`PlaceListService server is running. http://localhost:${port}`);
      await connectToDatabase();
    });
  } catch (e) {
    log.error(e);
  }
};

initialize();
