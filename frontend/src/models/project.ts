import { JSONSchemaType } from "ajv";
import createAjvValidator from "@Utils/createAjvValidator";
import { TUserSimpleModel, userSimpleModelSchema } from "./user";

export type TProjectModel = {
  id: number;
  title: string;
  description: string;
  label_config: string;
  expert_instruction: string;
  show_instruction: boolean;
  show_skip_button: boolean;
  enable_empty_annotation: boolean;
  show_annotation_history: boolean;
  organization: number;
  color: string;
  maximum_annotations: number;
  is_published: boolean;
  model_version: string;
  is_draft: boolean;
  created_by: TUserSimpleModel;
  created_at: string;
  min_annotations_to_start_training: number;
  start_training_on_annotation_update: boolean;
  // start_model_training: boolean,
  // retrieve_predictions_automatically: boolean;
  // show_predictions_to_annotators: boolean;
  show_collab_predictions: boolean;
  num_tasks_with_annotations: number;
  task_number: number;
  steps_per_epochs: number;
  useful_annotation_number: number;
  ground_truth_number: number;
  skipped_annotations_number: number;
  total_annotations_number: number;
  total_predictions_number: number;
  sampling: string;
  show_ground_truth_first: boolean;
  show_overlap_first: boolean;
  overlap_cohort_percentage: number;
  task_data_login?: string;
  task_data_password?: string;
  control_weights: object;
  parsed_label_config: object;
  evaluate_predictions_automatically: boolean;
  config_has_control_tags: boolean;
  skip_queue: string;
  reveal_preannotations_interactively: boolean;
  pinned_at?: string;
  finished_task_number: number;
  data_types: object;
  epochs?: number;
  batch_size?: number;
  image_width?: number;
  image_height?: number;
  label_config_title: string;
  audio_duration: number;
  audio_approved_duration: number;
  audio_rejected_duration: number;
  qa_approved_tasks: number;
  qa_rejected_tasks: number;
  audio_mono_duration: number;
  audio_stereo_duration: number;
  audio_approved_mono_duration: number;
  audio_approved_stereo_duration: number;
  audio_rejected_mono_duration: number;
  audio_rejected_stereo_duration: number;
  annotations_limit?: number;
  need_to_qa: boolean;
  need_to_qc: boolean;
};

export const projectModelSchema: JSONSchemaType<TProjectModel> = {
  type: "object",
  properties: {
    id: { type: "integer" },
    title: { type: "string" },
    description: { type: "string" },
    label_config: { type: "string" },
    expert_instruction: { type: "string" },
    show_instruction: { type: "boolean" },
    show_skip_button: { type: "boolean" },
    enable_empty_annotation: { type: "boolean" },
    show_annotation_history: { type: "boolean" },
    organization: { type: "integer" },
    color: { type: "string" },
    maximum_annotations: { type: "integer" },
    is_published: { type: "boolean" },
    model_version: { type: "string" },
    is_draft: { type: "boolean" },
    created_by: userSimpleModelSchema,
    created_at: { type: "string" },
    min_annotations_to_start_training: { type: "integer" },
    start_training_on_annotation_update: { type: "boolean" },
    // start_model_training: {type: "boolean"},
    // show_predictions_to_annotators: {type: "boolean"},
    // retrieve_predictions_automatically: {type: "boolean"},
    show_collab_predictions: { type: "boolean" },
    num_tasks_with_annotations: { type: "integer" },
    task_number: { type: "integer" },
    steps_per_epochs: { type: "integer" },
    useful_annotation_number: { type: "integer" },
    ground_truth_number: { type: "integer" },
    skipped_annotations_number: { type: "integer" },
    total_annotations_number: { type: "integer" },
    total_predictions_number: { type: "integer" },
    sampling: { type: "string" },
    show_ground_truth_first: { type: "boolean" },
    show_overlap_first: { type: "boolean" },
    overlap_cohort_percentage: { type: "integer" },
    task_data_login: { type: "string", nullable: true },
    task_data_password: { type: "string", nullable: true },
    control_weights: { type: "object" },
    parsed_label_config: { type: "object" },
    evaluate_predictions_automatically: { type: "boolean" },
    config_has_control_tags: { type: "boolean" },
    skip_queue: { type: "string" },
    reveal_preannotations_interactively: { type: "boolean" },
    pinned_at: { type: "string", nullable: true },
    finished_task_number: { type: "integer" },
    data_types: { type: "object" },
    epochs: { type: "integer", nullable: true },
    batch_size: { type: "integer", nullable: true },
    image_width: { type: "integer", nullable: true },
    image_height: { type: "integer", nullable: true },
    label_config_title: { type: "string" },
    audio_duration: { type: "number" },
    audio_approved_duration: { type: "number" },
    audio_rejected_duration: { type: "number" },
    qa_approved_tasks: { type: "integer" },
    qa_rejected_tasks: { type: "integer" },
    audio_mono_duration: { type: "number" },
    audio_stereo_duration: { type: "number" },
    audio_approved_mono_duration: { type: "number" },
    audio_approved_stereo_duration: { type: "number" },
    audio_rejected_mono_duration: { type: "number" },
    audio_rejected_stereo_duration: { type: "number" },
    annotations_limit: { type: "integer", nullable: true },
    need_to_qa: { type: "boolean" },
    need_to_qc: { type: "boolean" },
  },
  required: [
    "id",
    "title",
    "description",
    "label_config",
    "expert_instruction",
    "show_instruction",
    "show_skip_button",
    "enable_empty_annotation",
    "show_annotation_history",
    "organization",
    "color",
    "maximum_annotations",
    "is_published",
    "model_version",
    "is_draft",
    "created_by",
    "created_at",
    "min_annotations_to_start_training",
    "start_training_on_annotation_update",
    "show_collab_predictions",
    "num_tasks_with_annotations",
    "task_number",
    "useful_annotation_number",
    "ground_truth_number",
    "skipped_annotations_number",
    "total_annotations_number",
    "total_predictions_number",
    "sampling",
    "show_ground_truth_first",
    "show_overlap_first",
    "overlap_cohort_percentage",
    "control_weights",
    "parsed_label_config",
    "evaluate_predictions_automatically",
    "config_has_control_tags",
    "skip_queue",
    "reveal_preannotations_interactively",
    "finished_task_number",
    "data_types",
    "label_config_title",
    "audio_duration",
    "audio_approved_duration",
    "audio_rejected_duration",
    "qa_approved_tasks",
    "qa_rejected_tasks",
    "audio_mono_duration",
    "audio_stereo_duration",
    "audio_approved_mono_duration",
    "audio_approved_stereo_duration",
    "audio_rejected_mono_duration",
    "audio_rejected_stereo_duration",
    "need_to_qa",
    "need_to_qc",
  ],
  additionalProperties: true,
};

const validateProjectModel =
  createAjvValidator<TProjectModel>(projectModelSchema);
export default validateProjectModel;
