const Circle = (props) => {
  return (
    <button
      className="picker-circle"
      style={{ background: props.color }}
      onClick={() => props.calback(props.color)}
    />
  );
};

//const colors = ["#66C2A5", "#FC8D62", "#8DA0CB"];
export const colors = [
  ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3"],
  ["#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39"],
  ["#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#607d8b"],
];
const ColorPicker = (props) => {
  return (
    <div className="picker">
      <table>
        {colors.map((color) => {
          return (
            <tr>
              {color.map((c) => {
                return (
                  <td key={c}>
                    <Circle color={c} calback={props.calback} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ColorPicker;
