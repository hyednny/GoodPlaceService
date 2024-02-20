import { TypeOf, object, string } from "zod";

export const getUserSchema = object({
  params: object({
    name: string().optional(),
    userId: string({ required_error: "User ID is required" })
      .refine((value) => !isNaN(parseInt(value)), {
        message: "User ID must be a number type",
      })
      .transform((value) => parseInt(value)),
    password: string(),
  }),
});

export const createUserSchema = object({
  body: object({
    name: string(),
    //   .min(2, {
    //     message: "The name must be at least 2 characters long.",
    //   })
    //   .max(50, { message: "Names can be up to 50 characters long." })
    //   .regex(/^[A-Za-z가-힣]+$/, {
    //     message:
    //       "Names are only allowed in KOR and ENG characters, no spaces allowed.",
    //   }),

    userId: string(),
    // .min(6, { message: "아이디는 최소 6자 이상" })
    // .max(16, { message: "아이디는 최대 16자까지 허용" })
    // .regex(/^[a-zA-Z]+(?:\d*[a-zA-Z]*)*$/, {
    //   message: "아이디는 영문 또는 영문과 숫자의 조합이어야 합니다.",
    // }),

    password: string(),
    // .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
    // .max(20, { message: "비밀번호는 최대 20자까지 허용됩니다." })
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //   {
    //     message:
    //       "비밀번호는 대소문자, 숫자, 특수문자(@$!%*?&)를 포함해야 합니다.",
    //   }
    // ),
  }),
});

export type GetUserRequestType = TypeOf<typeof getUserSchema>;
export type CreateUserRequestType = TypeOf<typeof createUserSchema>;
