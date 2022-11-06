import "./BaseCheckbox.css";
const BaseCheckbox = ({ customLabelStyle, labelText }) => {
  return (
    <>
      <label className={`container ${customLabelStyle}`}>
        {labelText}
        <input type="checkbox" />
        <span className="checkmark rounded-md"></span>
      </label>
    </>
  );
};

export default BaseCheckbox;
