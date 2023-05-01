import "./Button.css";
const Button = ({ handlerClick }) => {
  return (
    <button className="switch_btn" onClick={handlerClick}>
      <i className="fa-solid fa-arrows-rotate"></i>
    </button>
  );
};

export default Button;
