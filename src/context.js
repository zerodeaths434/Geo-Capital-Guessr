import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStartModalOpen, setStartModal] = useState(true);
  const [wordNum, setWordNum] = useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [width, checkWidth] = useState(false);
  const [value, setValue] = useState(0);
  const [score, setScore] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeStartModal = () => {
    setStartModal(false);
  };

  useEffect(() => {
    screenSize < 900 ? checkWidth(true) : checkWidth(false);
  }, [screenSize]);

  window.addEventListener("resize", () => {
    setScreenSize(window.innerWidth);
  });

  const changeTheme = () => {
    if (document.body.style.background === "white") {
      document.body.style.background = "black";
    } else {
      document.body.style.background = "white";
    }
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        setWordNum,
        isStartModalOpen,
        setStartModal,
        closeStartModal,
        wordNum,
        changeTheme,
        width,
        value,
        setValue,
        score,
        setScore,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
