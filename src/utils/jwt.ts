import jwt from "jsonwebtoken";
import config from "config";

const publicKey = config.get<string>("PUBLIC_KEY");
const privateKey = config.get<string>("PRIVATE_KEY");

export function signJwt(
  object: Record<string, unknown>,
  options?: jwt.SignOptions | undefined
) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error: unknown) {
    return {
      valid: false,
      expired: (error as Error).message === "jwt expired",
      decoded: null,
    };
  }
}
