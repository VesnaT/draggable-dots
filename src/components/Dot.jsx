import Draggable from "react-draggable";
import { useRef } from "react";

const Dot = (props) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="dot">{props.content}</div>
    </Draggable>
  );
};

export default Dot;
