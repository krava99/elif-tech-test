import { z } from "zod";

export const orderSchema = z.object({
  name: z
    .string()
    .min(2, "Name must have at least 2 characters")
    .max(15, "Name must have at most 15 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone number must have at least 10 digits"),
  address: z.string().min(6, "Address must have at least 6 characters"),
});

export type OrderSchemaType = z.infer<typeof orderSchema>;
