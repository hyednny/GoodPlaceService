import { NextFunction, Request, Response } from "express";

export const requestHandler =
  (handler: (_req: any, _res: any) => Promise<unknown>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (error: unknown) {
      next(error);
    }
  };

export const makeResponse = (
  response: Response,
  result: boolean,
  message: string,
  code: number,
  data: any = {}
) => {
  return response.status(code).json({
    success: result,
    message: message,
    code: code,
    data: data,
  });
};

export const randomId = (length: number) => {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return Array.from({ length })
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join("");
};
