import { ReactNode, SetStateAction, useEffect } from "react";
import { SelectOption } from "../Select/Select";
import FormColumns from "./Columns/Columns";
import { FormProvider, useFormContext } from "./Context/Context";
import FormFields from "./Fields/Fields";
import "./Form.scss";
import FormRow from "./Row/Row";
import { getDataStorage } from "./utils";
import { validateForm } from "./validateForm";

type Ref = React.Ref<HTMLDivElement> | null;

export type TField = {
  type?: string;
  name?: string;
  label?: string;
  description?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  skipAutofill?: boolean;
  allowEmpty?: boolean;
  dependency?: string;
  value?: number | string;
  min?: number;
  validators?: string[];
  options?: SelectOption[];
  onChange?: (value: SetStateAction<string>) => void;
  onBlur?: (e: any) => void;
  disabled?: boolean;
  readonly?: boolean;
};

export type TColumns = {
  fields?: TField[];
  width?: number;
};

export type TFields = {
  columnCount: number;
  fields?: TField[];
  columns?: TColumns[];
};

export type TFormProps = {
  formRef?: Ref;
  children?: ReactNode;
  className?: string;
  autoComplete?: string | undefined;
  autoSave?: string | undefined;
  fields?: TFields[];
  onSubmit?: (formData: Record<string, any>) => void;
  onChange?: () => void;
};

const Form = (props: TFormProps) => {
  const { children, className, fields, onSubmit } = props;
  const { formData, setFormData, setFormErrors } = useFormContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formData, setFormErrors);

    if (errors.isValid && onSubmit) {
      onSubmit(formData);
    }
  };

  useEffect(() => {
    if (fields) {
      const data = getDataStorage(fields);
      if (data) {
        setFormData(data);
      }
    }
  }, [fields, setFormData]);

  return (
    <form
      className={`c-form ${className ? className : ""}`}
      onSubmit={handleSubmit}
    >
      {fields?.map(({ columnCount, fields, columns }, index) => (
        <FormRow key={`row-${index}`} columnCount={columnCount} gap={10}>
          {columns ? (
            <FormColumns columns={columns} />
          ) : (
            <FormFields fields={fields ?? []} />
          )}
        </FormRow>
      ))}
      {children}
    </form>
  );
};

export const FormBuilder = (props: TFormProps) => {
  const { children, fields, onSubmit } = props;
  return (
    <FormProvider>
      <div className="c-form__wrapper">
        <Form fields={fields} onSubmit={onSubmit}>
          {children}
        </Form>
      </div>
    </FormProvider>
  );
};

export default FormBuilder;
