import { TypeOf, number, object, string } from "zod";

export const getAllPlaceListSchema = object({
  query: object({
    userId: string().optional(),
  }),
});

export const getPlaceListSchema = object({
  params: object({
    id: string({ required_error: "Place List ID is required" })
      .refine((value) => !isNaN(parseInt(value)), {
        message: "Place List ID must be a number type",
      })
      .transform((value) => parseInt(value)),
  }),
});

export const createPlaceListSchema = object({
  body: object({
    id: number({
      required_error: "PlaceList ID is required",
      invalid_type_error: "PlaceList ID must be a number type",
    }).positive({ message: "Invalid PlaceList ID" }),
    place: string(),
    geo: string().optional(),
    etc: string().optional(),
  }),
});

export type GetAllPlaceListRequstType = TypeOf<typeof getAllPlaceListSchema>;
export type GetPlaceListRequestType = TypeOf<typeof getPlaceListSchema>;
export type CreatePlaceListRequestType = TypeOf<typeof createPlaceListSchema>;
