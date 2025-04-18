const Button = ({ type = "button", children, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-black rounded-full duration-200 hover:bg-black/80 hover:cursor-pointer focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
