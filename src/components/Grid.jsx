import Dot from "./Dot";
import { useState } from "react";

const Grid = () => {
  const [dots, setDots] = useState([
    { id: 0, content: "Foo", color: "#ff0000" },
    { id: 1, content: "Bar", color: "#00ff00" },
    { id: 2, content: "Baz", color: "#0000ff" },
  ]);

  return (
    <div className="grid">
      {dots.map((dot) => (
        <Dot content={dot.content} key={dot.id} color={dot.color} />
      ))}
    </div>
  );
};

export default Grid;
