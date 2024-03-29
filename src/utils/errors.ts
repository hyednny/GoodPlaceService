class ErrorTemplate extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.name = this.constructor.name;
  }
}

export class ConflictError extends ErrorTemplate {
  constructor(message = "Conflict Error") {
    super(message, 409);
  }
}

export class UnauthorizedError extends ErrorTemplate {
  constructor(message = "Bad Request") {
    super(message, 401);
  }
}
