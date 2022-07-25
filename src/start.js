import React, { useState } from "react";
import { useGlobalContext } from "./context";

const StartModal = () => {
  const { isStartModalOpen, closeStartModal, setWordNum, wordNum, setValue } =
    useGlobalContext();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState("");

  const startGame = () => {
    if (wordNum > 0 && wordNum <= 20) {
      setIsButtonClicked(true);
      setValue(wordNum);
      setTimeout(() => {
        closeStartModal(true);
      }, 3000);
    } else if (wordNum && wordNum > 20) {
      setText("Number must be less than 20");
      getAlert();
    } else {
      setText("Please Enter a Number");
      getAlert();
    }
  };

  const getAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div
      className={`${
        isStartModalOpen
          ? "modal-overlay show-modal start-modal-color"
          : "modal-overlay"
      }`}
    >
      {alert ? (
        <div className="alert">
          <h3>{text}</h3>
        </div>
      ) : (
        ""
      )}
      <div className="title-container">
        <header className="title">Geo Trend Guessr</header>
        <p className="sub-title">
          A word will be given. You have to guess the country with the most
          number of google searches for that particular word in 3 attempts.
        </p>
      </div>
      <div className="wrapper">
        <div className="round-header">ENTER THE NUMBER OF ROUNDS</div>
        <div className="round-input">
          <input maxLength="2" onChange={(e) => setWordNum(e.target.value)} />
        </div>
        <button className="start-button" onClick={startGame}>
          START GAME
        </button>
        <div className="game-started">
          {isButtonClicked ? "GAME STARTED" : ""}
        </div>
      </div>
    </div>
  );
};
export default StartModal;
