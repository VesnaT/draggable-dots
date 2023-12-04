const Circle = (props) => {
  let background = props.color;
  let boxShadow = "none";
  let border = `3px solid ${props.color}`;
  if (props.isSelected) {
    background = "#fff";
    boxShadow = `0 0 4px 2px ${props.color}`;
  }
  return (
    <button
      className="picker-circle"
      style={{
        background: background,
        border: border,
        boxShadow: boxShadow,
      }}
      onClick={() => props.calback(props.color)}
    />
  );
};
export const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
];

const ColorPicker = (props) => {
  return (
    <div className="picker">
      {colors.map((c) => (
        <Circle
          key={c}
          color={c}
          isSelected={props.selectedColor === c}
          calback={props.calback}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
