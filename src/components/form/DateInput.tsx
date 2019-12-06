import * as React from "react";

export interface Props {
  name: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyPress?: (event: React.KeyboardEvent) => void,
  label?: string,
  placeholder?: string,
  value?: string,
  error?: string
}

export const DateInput: React.SFC<Props> = ({name, label, onChange, onKeyPress, placeholder, value, error}: Props) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  const editor = (
    <input
      type="date"
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value||""}
      onChange={onChange}
      onKeyPress={onKeyPress} />
  );

  if(!label) {
    return editor;
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        {editor}
        {error && <small className="text-danger">{error}</small>}
      </div>
    </div>
  );
};
