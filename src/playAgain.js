import React from "react";
import { useGlobalContext } from "./context";

const PlayAgain = () => {
  const { setStartModal, value, score, setScore } = useGlobalContext();

  const reset = () => {
    setStartModal(true);
    setScore(0);
  };

  return (
    <div className={`${true ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className="play-again-modal">
        <img
          src="https://media1.tenor.com/images/f6fe8d1d0463f4e51b6367bbecf56a3e/tenor.gif?itemid=7245759"
          alt="Random cat"
          className="image"
        />
        <h1>{`You Scored ${score} out of ${value}`}</h1>
        <div className="omg">
          <button className="close-btn" onClick={reset}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayAgain;
