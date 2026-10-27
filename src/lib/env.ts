import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().min(1, { message: "API URL is required" }),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL:
    process.env.NEXT_PUBLIC_API_URL || "https://backendnextjs-webapp-gtgsc2dbduhmh9e0.westus3-01.azurewebsites.net/api/v1",
});
