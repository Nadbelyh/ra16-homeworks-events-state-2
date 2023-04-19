import "./index.css";

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className="icon">
      <span className="material-icons" onClick={() => onSwitch(icon)}>
        {icon}
      </span>
    </div>
  );
}

export default IconSwitch;
