import { JSONSchemaType } from "ajv";
import createAjvValidator from "@Utils/createAjvValidator";

export type TLoginDTO = {
  email: string,
  password: string,
  csrfmiddlewaretoken: string,
}

export type TSignupDTO = {
  email: string,
  password: string,
  role: number,
  csrfmiddlewaretoken: string,
}

export type TLoginResponseDTO = {
  status: number,
  redirect: string,
}

const loginResponseSchema: JSONSchemaType<TLoginResponseDTO> = {
  type: "object",
  properties: {
    status: { type: "number" },
    redirect: { type: "string", minLength: 1 },
  },
  required: ["status", "redirect"],
  additionalProperties: false,
}

export const validateLoginResponse = createAjvValidator<TLoginResponseDTO>(loginResponseSchema);
