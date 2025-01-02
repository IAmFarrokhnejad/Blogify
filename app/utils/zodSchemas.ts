import { z } from "zod";


export const siteSchema = z.object({
    name: z.string().min(1).max(30),
    description: z.string().min(1).max(200),
    subdirectory: z.string().min(1).max(40),
});