import React, { CSSProperties, ReactNode, useMemo, useState } from "react";
import IconClear from "@Assets/icons/IconClear";
import "./InputBase.scss";
import { OptionsType } from "@/pages/Project/FormApply/apply";

export type TInputBaseProps = {
  autoFocus?: boolean;
  className?: string;
  type?: "text" | "password" | "email" | "number" | "datetime-local" | "date";
  fieldName?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  allowClear?: boolean;
  status?: "" | "error" | "warning" | "success";
  style?: CSSProperties;
  value?: string | undefined;
  isRequired?: boolean;
  error?: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isMultipleLine?: boolean;
  readonly?: boolean;
  customRightItem?: ReactNode;
  listOption?: OptionsType[];
};

const MemoizedInputBase: React.FC<TInputBaseProps> = ({
  autoFocus,
  className,
  type = "text",
  fieldName,
  label,
  placeholder,
  disabled,
  allowClear = true,
  status = "",
  style,
  value,
  isRequired = false,
  error,
  onChange,
  onBlur,
  isMultipleLine = false,
  readonly = false,
  customRightItem,
  listOption,
}) => {
  const [query, setQuery] = useState(() => {
    return value ? value : "";
  });

  const inputStyle: React.CSSProperties = {
    ...style,
  };

  useMemo(() => {
    if (value?.length || value?.length === 0) {
      setQuery(value);
    }
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange?.(e);
  };

  const handleInputBlurChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onBlur?.(e);
  };

  const classes = useMemo(() => {
    const list = ["c-input-base__field"];

    if (fieldName) {
      list.push("c-input-base__field-" + fieldName);
    }

    if (error) {
      list.push("c-input-base--error");
    } else if (status) {
      list.push("c-input-base--" + status);
    }

    if (disabled) {
      list.push("disabled");
    }

    if (className) {
      list.push(className);
    }

    return list;
  }, [error, className, fieldName, status, disabled]);

  return (
    <div className={classes.join(" ")}>
      {label && (
        <label className="c-input-base__label">
          <span>{label}</span>{" "}
          {isRequired && <span className="required">*</span>}
        </label>
      )}
      <div className="c-input-base__control">
        {isMultipleLine ? (
          <textarea
            autoFocus={autoFocus}
            className="input-text"
            id={fieldName}
            name={fieldName}
            placeholder={placeholder}
            onChange={(e) =>
              handleInputChange(
                e as unknown as React.ChangeEvent<HTMLInputElement>
              )
            }
            onBlur={(e) =>
              handleInputBlurChange(
                e as unknown as React.ChangeEvent<HTMLInputElement>
              )
            }
            disabled={disabled}
            style={inputStyle}
            readOnly={readonly}
          >
            {query}
          </textarea>
        ) : listOption ? (
          <select
            className="select"
            onChange={(e) =>
              handleInputChange(
                e as unknown as React.ChangeEvent<HTMLInputElement>
              )
            }
          >
            {listOption?.map((m) => {
              return (
                <option value={m.id} key={m.id}>
                  {m.name}
                </option>
              );
            })}
          </select>
        ) : (
          <input
            autoFocus={autoFocus}
            className="input-text"
            id={fieldName}
            name={fieldName}
            type={type}
            value={query}
            placeholder={placeholder}
            onChange={handleInputChange}
            onBlur={handleInputBlurChange}
            disabled={disabled}
            style={inputStyle}
            readOnly={readonly}
          />
        )}
        {query.length > 0 && !listOption && allowClear && (
          <div className="c-input-base__action">
            <button onClick={() => setQuery("")}>
              <IconClear />
            </button>
          </div>
        )}
        {customRightItem && (
          <div className="c-input-base__right">{customRightItem}</div>
        )}
      </div>
      {error && <span className="c-input-base__error">{error}</span>}
    </div>
  );
};

const InputBase = React.memo(MemoizedInputBase);

export default InputBase;
