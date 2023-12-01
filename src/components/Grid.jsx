import Dot from "./Dot";
import { useState } from "react";

const Grid = () => {
  const [dots, setDots] = useState([
    { content: "Foo", id: 0 },
    { content: "Bar", id: 1 },
    { content: "Baz", id: 2 },
  ]);

  return (
    <div className="grid">
      {dots.map((dot) => (
        <Dot content={dot.content} key={dot.id} />
      ))}
    </div>
  );
};

export default Grid;
