import Dot from "./Dot";
import { useState } from "react";
import { colors } from "./ColorPicker";

const Grid = () => {
  const [dots, setDots] = useState([
    { id: 0, color: colors[Math.floor(Math.random() * colors.length)] },
    { id: 1, color: colors[Math.floor(Math.random() * colors.length)] },
    { id: 2, color: colors[Math.floor(Math.random() * colors.length)] },
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
