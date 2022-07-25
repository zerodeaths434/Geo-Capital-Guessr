import React from "react";
import { useGlobalContext } from "./context";

const Modal = ({ word }) => {
  const { isModalOpen } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="start-modal">
        <h1>{word}</h1>
      </div>
    </div>
  );
};

export default Modal;
