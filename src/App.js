import React, { useEffect, useRef } from "react";
import Game from "./game";
import StartModal from "./start";
import lottie from "lottie-web";
import { useGlobalContext } from "./context";

const App = () => {
  const container = useRef(null);
  const { isStartModalOpen, width } = useGlobalContext();

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./sad-dog.json"),
    });
    return () => {
      lottie.destroy();
    };
  }, [width]);
  return (
    <>
      {/*{width ? (
        <div className="modal-overlay">
          <div
            className={`${width ? "not-supported" : "not-supported show-bro"}`}
            ref={container}
          >
            <div className="not-supported-text">
              <h1>GAME NOT SUPPORTED ON SMALLER SCREENS</h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}*/}
      {isStartModalOpen ? <StartModal /> : <Game />}
    </>
  );
};

export default App;
