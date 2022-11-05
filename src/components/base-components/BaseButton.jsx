const BaseButton = ({ children, onFocus }) => {
  return (
    <button
      className="w-full rounded-lg py-3 px-5 text-white font-semibold bg-[#1570EF] hover:bg-[#175CD3]"
      onFocus={onFocus}
    >
      {children}
    </button>
  );
};

export default BaseButton;
