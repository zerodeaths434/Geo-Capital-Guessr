import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Modal from "./Modal";
import CorrectCountry from "./correctCountry";
import PlayAgain from "./playAgain";
import Globle from "./globe";
import { useGlobalContext } from "./context";
import Capitals from "./capital";

const Game = () => {
  const [word, setWord] = useState("");
  const [country, setCountry] = useState("");
  const [content, setContent] = useState("");
  const [tries, setNoOFTries] = useState(0);
  const { openModal, isModalOpen, closeModal, wordNum } = useGlobalContext();

  const getCapital = () => {
    const capital = Capitals[Math.floor(Math.random() * Capitals.length)];
    setWord(capital.city);
    setCountry(capital.country);
    setTimeout(openModal, 1000);
  };

  useEffect(() => {
    if (isModalOpen) {
      const interval = setInterval(closeModal, 2000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    getCapital();
  }, []);

  return (
    <>
      {tries === 3 ? <CorrectCountry country={country} /> : null}
      {isModalOpen ? <Modal word={word} /> : null}
      {wordNum > 0 ? (
        <>
          <Globle
            tries={tries}
            setTries={setNoOFTries}
            getCapital={getCapital}
            country={country}
          />
          <ReactTooltip>{content}</ReactTooltip>
        </>
      ) : (
        <PlayAgain />
      )}
    </>
  );
};

export default Game;
