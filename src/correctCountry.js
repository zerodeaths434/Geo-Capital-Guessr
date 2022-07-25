import React from "react";
import { useGlobalContext } from "./context";

const CorrectCountry = ({ country }) => {
  const { isModalOpen } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="country-modal">
        <h1>{`The correct country was ${country}`}</h1>
      </div>
    </div>
  );
};

export default CorrectCountry;
