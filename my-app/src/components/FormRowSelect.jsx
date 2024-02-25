import React from "react";

const FormRowSelect = ({ name, labeltext, list, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labeltext || name}
      </label>

      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
        onChange={(e) => console.log(e.target.value)}
      >
        {list.map((itemValue) => (
          <option key={itemValue} value={itemValue}>
            {itemValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
