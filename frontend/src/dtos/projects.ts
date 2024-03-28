import { JSONSchemaType } from "ajv";
import createAjvValidator from "@Utils/createAjvValidator";
import { projectModelSchema, TProjectModel } from "@Models/project";

export type TProjectsResponseDTO = {
  count: number;
  next?: string;
  previous?: string;
  results: TProjectModel[];
};

const projectsResponseSchema: JSONSchemaType<TProjectsResponseDTO> = {
  type: "object",
  properties: {
    count: { type: "number" },
    next: { type: "string", nullable: true },
    previous: { type: "string", nullable: true },
    results: { type: "array", items: projectModelSchema },
  },
  required: ["count", "results"],
  additionalProperties: false,
};

export const validateProjectsResponse =
  createAjvValidator<TProjectsResponseDTO>(projectsResponseSchema);
