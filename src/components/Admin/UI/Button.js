import "./Button.css";

const Button = function (props) {
  return (
    <button type={props.type} className="btn">
      {props.children}
    </button>
  );
};

export default Button;
