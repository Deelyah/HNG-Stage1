import "./BaseCheckbox.css";
const BaseCheckbox = ({ customLabelStyle, labelText }) => {
  return (
    <>
      <label class={`container ${customLabelStyle}`}>
        {labelText}
        <input type="checkbox" />
        <span class="checkmark rounded-md"></span>
      </label>
    </>
  );
};

export default BaseCheckbox;
