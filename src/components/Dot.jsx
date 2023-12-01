import Draggable from "react-draggable";
import { useState, useRef } from "react";

const Dot = (props) => {
  const nodeRef = useRef(null);
  const [color, setColor] = useState(props.color);
  const [tempColor, setTempColor] = useState(color);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="dot"
        style={{ background: color }}
        onDoubleClick={() => setIsEditing(true)}
      >
        {isEditing ? (
          <div>
            <textarea
              className="text-input"
              value={tempColor}
              onChange={(e) => setTempColor(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setColor(tempColor);
                  setIsEditing(false);
                } else if (e.key === "Escape") {
                  setIsEditing(false);
                }
              }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </Draggable>
  );
};

export default Dot;
