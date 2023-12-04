import Draggable from "react-draggable";
import { useState, useRef, useCallback, useEffect } from "react";
import ColorPicker from "./ColorPicker";

const Dot = (props) => {
  const nodeRef = useRef(null);
  const [color, setColor] = useState(props.color);
  const [isEditing, setIsEditing] = useState(false);
  const setColorAndClose = (col) => {
    setColor(col);
    setIsEditing(false);
  };

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setIsEditing(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="dot"
        style={{ background: color }}
        onDoubleClick={() => setIsEditing(true)}
        onContextMenu={(e) => {
          e.preventDefault(); // prevent the default behaviour when right clicked
          setIsEditing(true);
        }}
      >
        {isEditing && (
          <div>
            <ColorPicker selectedColor={color} calback={setColorAndClose} />
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Dot;
