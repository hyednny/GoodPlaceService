import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { UnauthorizedError } from "../utils/errors";
import { verifyJwt } from "../utils/jwt";

const API_KEY = process.env.API_KEY as string;

const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (res.locals.isCheckedJwt) return next();

    if (!req.header("Authorization") || !req.header("authorization"))
      throw new UnauthorizedError("Authorization must be present in headers");

    const apiKey = get(req, "headers.authorization", "").replace(
      /^Basic\s/,
      ""
    );

    if (!apiKey || apiKey !== Buffer.from(API_KEY).toString("base64"))
      throw new UnauthorizedError("Invalid authorization");

    return next();
  } catch (error: unknown) {
    next(error);
  }
};

const validateJwt =
  (isRequired: boolean) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      if (isRequired && !req.cookies?.accessToken)
        throw new UnauthorizedError("Access Token must be present in cookies");

      const { valid, decoded, expired } = verifyJwt(req.cookies?.accessToken);

      if (!valid || expired) {
        if (!isRequired) return next();
        else
          throw new UnauthorizedError(
            expired ? "Access token has expired" : "Invalid JWT"
          );
      }

      res.locals.userId = get(decoded, "address", "");
      res.locals.isCheckedJwt = true;

      return next();
    } catch (error: unknown) {
      next(error);
    }
  };
