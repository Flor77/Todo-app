import { useState, useEffect } from "react";

const CheckBox = (props) => {
  const [checked, setChecked] = useState(!!props.checked);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (props.onChange) {
      props.onChange(checked);
    }
  }, [checked]);

  return (
    <div className="round">
      <input
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label
        className={`checkbox ${checked ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default CheckBox;
