import Draggable from "react-draggable";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import { socket } from "../socket";

const Dot = (props) => {
  const nodeRef = useRef(null);
  const [color, setColor] = useState(props.color);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const setColorAndSave = (col) => {
    setColor(col);
    // setIsEditing(false);
    socket.emit(
      "dot",
      JSON.stringify({ [props.id]: { color: col, x: x, y: y } }),
    );
  };

  useEffect(() => {
    console.log("useEffect");

    function onDotEvent(value) {
      let dict = JSON.parse(value);
      let key = Object.keys(dict)[0];
      if (key == props.id) {
        setColor(dict[key].color);
        setX(dict[key].x);
        setY(dict[key].y);
      }
    }

    socket.on("dot", onDotEvent);
    return () => {
      socket.off("dot", onDotEvent);
    };
  }, []);

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

  const handleStop = (event, element) => {
    setX(element.x);
    setY(element.y);
    console.log(element.x, element.y);
    socket.emit(
      "dot",
      JSON.stringify({
        [props.id]: { color: color, x: element.x, y: element.y },
      }),
    );
  };

  return (
    <Draggable nodeRef={nodeRef} onStop={handleStop} position={{ x: x, y: y }}>
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
            <ColorPicker selectedColor={color} calback={setColorAndSave} />
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Dot;
