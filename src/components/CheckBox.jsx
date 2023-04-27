import { useState, useEffect, useCallback } from "react";

const CheckBox = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const memoizedOnChange = useCallback(onChange, [isChecked]);

  useEffect(() => {
    if (memoizedOnChange) {
      memoizedOnChange(isChecked);
    }
  }, [isChecked, memoizedOnChange]);

  return (
    <div className="round">
      <input
        type="checkbox"
        value={isChecked}
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
