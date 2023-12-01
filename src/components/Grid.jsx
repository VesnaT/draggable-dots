import Dot from "./Dot";
import { useState } from "react";

const Grid = () => {
  const [dots, setDots] = useState([
    { id: 0, color: "#66C2A5" },
    { id: 1, color: "#FC8D62" },
    { id: 2, color: "#8DA0CB" },
  ]);

  return (
    <div className="grid">
      {dots.map((dot) => (
        <Dot key={dot.id} color={dot.color} />
      ))}
    </div>
  );
};

export default Grid;
