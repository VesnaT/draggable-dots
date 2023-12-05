import Dot from "./Dot";
import { useEffect, useState } from "react";

const Grid = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const endpoint = "http://127.0.0.1:5000/data";
    fetch(endpoint).then((res) => res.json().then((data) => setDots(data)));
  }, []);

  return (
    <div className="grid">
      {dots.map((dot) => (
        <Dot key={dot.id} color={dot.color} />
      ))}
    </div>
  );
};

export default Grid;
