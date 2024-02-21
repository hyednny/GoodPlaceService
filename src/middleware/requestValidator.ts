import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";
import { log } from "../utils/logger";
import { makeResponse } from "../utils/helper";

const requestValidator =
  (schema: AnyZodObject) =>
  (
    req: Request<{ [key: string]: unknown }>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      req.body = result.body;
      req.query = result.query;
      req.params = result.params;

      return next();
    } catch (error: any) {
      log.error(error);
      return makeResponse(res, false, error.errors[0].message, 400);
    }
  };

export default requestValidator;
