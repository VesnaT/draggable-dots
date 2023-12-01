const Circle = (props) => {
  return (
    <button
      className="picker-circle"
      style={{ background: props.color }}
      onClick={() => props.calback(props.color)}
    />
  );
};

const colors = ["#66C2A5", "#FC8D62", "#8DA0CB"];
const ColorPicker = (props) => {
  return (
    <div className="picker">
      <table>
        <tr>
          {colors.map((c) => {
            return (
              <td key={c}>
                <Circle color={c} calback={props.calback} />
              </td>
            );
          })}
        </tr>
      </table>
    </div>
  );
};

export default ColorPicker;
