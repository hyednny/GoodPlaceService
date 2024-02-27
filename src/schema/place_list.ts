import { TypeOf, object, string } from "zod";

export const getAllPlaceListSchema = object({
  query: object({
    userId: string().optional(),
  }),
});

export type GetAllPlaceListRequstType = TypeOf<typeof getAllPlaceListSchema>;
