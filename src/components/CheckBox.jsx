import { useState, useEffect } from "react";

const CheckBox = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    if (onChange) {
      onChange(isChecked);
    }
  }, [isChecked]);

  return (
    <div className="round">
      <input
        type="checkbox"
        // value={isChecked}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
        htmlFor="checkbox"
      ></label>
    </div>
  );
};

export default CheckBox;
