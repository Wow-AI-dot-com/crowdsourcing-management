import { SetStateAction, useCallback, useEffect, useRef } from "react";
import { useFormContext } from "../Context/Context";
import { TField } from "../Form";
import RenderFields from "./RenderField";

type TFieldsProps = {
  fields: TField[];
};

const PASSWORD_PROTECTED_VALUE = "got ya, suspicious hacker!";

const FormFields = (props: TFieldsProps) => {
  const { fields } = props;
  const { formData, setFormData, setFormErrors } = useFormContext();
  const isMounted = useRef(true);

  const computeUpdatedValue = (
    type: string,
    value: string | boolean | number,
    PASSWORD_PROTECTED_VALUE: string
  ): any => {
    let updatedValue: any = value;

    switch (type) {
      case "select":
        updatedValue = value;
        break;
      case "toggle":
        updatedValue = value === true ? true : false;
        break;
      case "counter":
        updatedValue = parseInt(value as string, 10);
        break;
      case "password":
        updatedValue =
          value === PASSWORD_PROTECTED_VALUE ? PASSWORD_PROTECTED_VALUE : value;
        break;
      default:
        break;
    }

    return updatedValue;
  };

  const handleFieldChange = useCallback(
    async (field: TField, value: string | boolean | number, type: string) => {
      const updatedValue = computeUpdatedValue(
        type,
        value,
        PASSWORD_PROTECTED_VALUE
      );

      if (type === "select") {
        const { onChange } = field;
        onChange && (await onChange(value as SetStateAction<string>));
        // Resetting formErrors when swicher type
        setFormErrors("", "");
      }

      const updatedData = {
        ...formData,
        [field && (field.name as string)]: field.required
          ? {
              name: updatedValue,
              rq: true,
            }
          : updatedValue,
      };
      setFormData(updatedData);
    },
    [formData, setFormData, setFormErrors]
  );

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      {fields?.map((field) => (
        <div key={`field-${field && field.name}`}>
          <RenderFields field={field} onChange={handleFieldChange} />
        </div>
      ))}
    </>
  );
};

export default FormFields;
