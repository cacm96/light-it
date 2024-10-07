import React from "react";
import { Controller } from "react-hook-form";
import "./InputText.css";
import { errorHelper } from "../../helpers/errorHelpers";

type TextInputProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  type?: string;
};

export const InputText: React.FC<TextInputProps> = ({
  name,
  label,
  placeholder,
  control,
  type = "text",
}) => {
  const rules = (name: string) => {
    const items = ["name", "website", "description", "avatar"];

    if (items.includes(name)) {
      return { required: true };
    }
  };
  return (
    <div className="text-input">
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules(name)}
        render={({ field, fieldState }) => (
          <div className="input-container">
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`input ${fieldState.invalid ? "input-error" : ""}`}
            />
            {fieldState.error && (
              <span className="error-message">
                {errorHelper[name][fieldState.error.type]}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};
