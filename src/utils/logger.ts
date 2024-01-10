import logger from "pino";
import pino from "pino-pretty";
import { format } from "date-fns";

const pretifier = pino({
  colorize: true,
  ignore: "pid,hostname",
  customPrettifiers: {
    time: () => `[${format(new Date(), "yyyy/MM/dd HH:mm:ss")}]`,
  },
});

export const log = logger(pretifier);
