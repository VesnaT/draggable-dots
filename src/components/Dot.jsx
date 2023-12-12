import Draggable from "react-draggable";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import { socket } from "../socket";

const Dot = (props) => {
  const nodeRef = useRef(null);
  const [color, setColor] = useState(props.color);
  const [isEditing, setIsEditing] = useState(false);

  const saveColor = (color) => {
    const endpoint = "http://127.0.0.1:5000/data";
    console.log("color", color);

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [props.id]: { color: color } }),
    });
  };

  const setColorAndClose = (col) => {
    setColor(col);
    // setIsEditing(false);
    saveColor(col);
    socket.emit("dot", JSON.stringify({ [props.id]: { color: col } }));
  };

  useEffect(() => {
    console.log("useEffect");
    function onFooEvent(value) {
      let dict = JSON.parse(value);
      let key = Object.keys(dict)[0];
      if (key == props.id) {
        setColor(dict[key].color);
      }
    }

    socket.on("dot", onFooEvent);
    return () => {
      socket.off("dot", onFooEvent);
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
