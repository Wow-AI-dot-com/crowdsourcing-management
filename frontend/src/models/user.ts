import {JSONSchemaType} from "ajv";
import createAjvValidator from "@Utils/createAjvValidator";
import dayjs from "dayjs";

export const newUser: TUserModel = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  last_activity: "",
  initials: "",
  phone: "",
  is_organization_admin: false,
  is_active: true,
  is_superuser: false,
  is_qa: false,
  is_qc: false,
  is_model_seller: false,
  is_compute_supplier: false,
  date_joined: dayjs().toISOString(),
}

export type TUserModel = {
  id: number,
  first_name: string,
  last_name: string,
  username?: string,
  email: string,
  password?: string,
  last_activity: string,
  avatar?: string,
  initials: string,
  phone: string,
  active_organization?: number,
  is_organization_admin: boolean,
  allow_newsletters?: boolean,
  is_active: boolean,
  is_superuser: boolean,
  is_qa: boolean,
  is_qc: boolean,
  is_model_seller: boolean,
  is_compute_supplier: boolean,
  date_joined: string,
}

export const userModelSchema: JSONSchemaType<TUserModel> = {
  type: "object",
  properties: {
    id: {type: "integer"},
    first_name: {type: "string"},
    last_name: {type: "string"},
    username: {type: "string", nullable: true},
    email: {type: "string", minLength: 1},
    password: {type: "string", nullable: true},
    last_activity: {type: "string", minLength: 1},
    avatar: {type: "string", nullable: true},
    initials: {type: "string", minLength: 1},
    phone: {type: "string"},
    active_organization: {type: "number", nullable: true},
    is_organization_admin: {type: "boolean"},
    allow_newsletters: {type: "boolean", nullable: true},
    is_active: {type: "boolean"},
    is_superuser: {type: "boolean"},
    is_qa: {type: "boolean"},
    is_qc: {type: "boolean"},
    is_model_seller: {type: "boolean"},
    is_compute_supplier: {type: "boolean"},
    date_joined: {type: "string"},
  },
  required: [
    "id",
    "first_name",
    "last_name",
    "email",
    "last_activity",
    "initials",
    "phone",
    "is_organization_admin",
    "is_superuser",
    "is_qa",
    "is_qc",
    "is_model_seller",
    "is_compute_supplier",
    "date_joined",
  ],
  additionalProperties: true,
}

export type TUserSimpleModel = {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  avatar?: string,
}

export const userSimpleModelSchema: JSONSchemaType<TUserSimpleModel> = {
  type: "object",
  properties: {
    id: {type: "integer"},
    first_name: {type: "string"},
    last_name: {type: "string"},
    email: {type: "string", minLength: 1},
    avatar: {type: "string", nullable: true},
  },
  required: [
    "id",
    "first_name",
    "last_name",
    "email",
  ],
  additionalProperties: false,
}

export type TUserCompactModel = {
  id: number,
  first_name: string,
  last_name: string,
  avatar?: string,
}

export const userCompactModelSchema: JSONSchemaType<TUserCompactModel> = {
  type: "object",
  properties: {
    id: {type: "integer"},
    first_name: {type: "string"},
    last_name: {type: "string"},
    avatar: {type: "string", nullable: true},
  },
  required: [
    "id",
    "first_name",
    "last_name",
  ],
  additionalProperties: false,
}

const validateUserModel = createAjvValidator<TUserModel>(userModelSchema);
export const validateUserSimpleModel = createAjvValidator<TUserSimpleModel>(userSimpleModelSchema);
export const validateUserCompactModel = createAjvValidator<TUserCompactModel>(userCompactModelSchema);
export default validateUserModel;
