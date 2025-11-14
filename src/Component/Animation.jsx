import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../index.css";

// ✅ import รูปจาก assets
import basketball from "../assets/basketball.jpg";
import football from "../assets/football.png";
import volleyball from "../assets/volleyball.jpg";
import human from "../assets/human.png";
import cartoon from "../assets/rick.png";
import woodBg from "../assets/wood-bg.jpg";

const Animation = () => {
  const fieldRef = useRef(null);
  const ballRef = useRef(null);

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [vx] = useState(5);
  const [vy] = useState(5);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [selected, setSelected] = useState("none");

  const fieldWidth = 600;
  const fieldHeight = 400;
  const ballDiameter = 100;
  const maxX = fieldWidth - ballDiameter - 2;
  const maxY = fieldHeight - ballDiameter - 2;

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setX((prevX) => {
          let newX = goRight ? prevX + vx : prevX - vx;
          if (newX >= maxX) setGoRight(false);
          if (newX <= 0) setGoRight(true);
          return Math.max(0, Math.min(newX, maxX));
        });

        setY((prevY) => {
          let newY = goDown ? prevY + vy : prevY - vy;
          if (newY >= maxY) setGoDown(false);
          if (newY <= 0) setGoDown(true);
          return Math.max(0, Math.min(newY, maxY));
        });
      }
    }, 25);
    return () => clearInterval(interval);
  }, [running, goRight, goDown, vx, vy]);

  const toggleRun = () => setRunning(!running);
  const handleSelect = (type) => setSelected(type);

  const getBallStyle = () => {
    const base = {
      left: `${x}px`,
      top: `${y}px`,
      width: `${ballDiameter}px`,
      height: `${ballDiameter}px`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    switch (selected) {
      case "football":
        return { ...base, backgroundImage: `url(${football})` };
      case "basketball":
        return { ...base, backgroundImage: `url(${basketball})` };
      case "volleyball":
        return { ...base, backgroundImage: `url(${volleyball})` };
      case "human":
        return { ...base, backgroundImage: `url(${human})` };
      case "cartoon":
        return { ...base, backgroundImage: `url(${cartoon})` };
      default:
        return { ...base, backgroundImage: "none", backgroundColor: "lightgray" };
    }
  };

  return (
    <div className="anim-container">
      <div
        ref={fieldRef}
        className="anim-field"
        style={{
          width: `${fieldWidth}px`,
          height: `${fieldHeight}px`,
          backgroundImage: `url(${woodBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          ref={ballRef}
          className="anim-ball position-absolute"
          style={getBallStyle()}
        ></div>
      </div>

      <div className="anim-control d-flex flex-wrap gap-2 justify-content-center mt-3">
        <button
          onClick={toggleRun}
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
        >
          <i className={`bi ${running ? "bi-pause" : "bi-play"}`}></i>
          &nbsp;{running ? "PAUSE" : "RUN"}
        </button>

        <button
          onClick={() => handleSelect("none")}
          className={`btn ${selected === "none" ? "btn-secondary" : "btn-outline-secondary"}`}
        >
          None
        </button>
        <button
          onClick={() => handleSelect("basketball")}
          className={`btn ${selected === "basketball" ? "btn-primary" : "btn-outline-info"}`}
        >
          Basketball
        </button>
        <button
          onClick={() => handleSelect("football")}
          className={`btn ${selected === "football" ? "btn-primary" : "btn-outline-info"}`}
        >
          Football
        </button>
        <button
          onClick={() => handleSelect("volleyball")}
          className={`btn ${selected === "volleyball" ? "btn-primary" : "btn-outline-info"}`}
        >
          VolleyBall
        </button>
        <button
          onClick={() => handleSelect("human")}
          className={`btn ${selected === "human" ? "btn-primary" : "btn-outline-info"}`}
        >
          Human
        </button>
        <button
          onClick={() => handleSelect("cartoon")}
          className={`btn ${selected === "cartoon" ? "btn-primary" : "btn-outline-info"}`}
        >
          Cartoon
        </button>
      </div>
    </div>
  );
};

export default Animation;
