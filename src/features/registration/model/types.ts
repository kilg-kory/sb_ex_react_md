import * as yup from "yup";
import type { userSchema } from "./validation";

export type User = yup.InferType<typeof userSchema>;
