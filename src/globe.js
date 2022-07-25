import "./index.css";
import { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { useGlobalContext } from "./context";
import countries from "./countries";

const correctSound = () => {
  document.getElementById("Correctaudio").play();
};

const WrongSound = () => {
  document.getElementById("Wrongaudio").play();
};

export default function Globle({ country, getCapital, tries, setTries }) {
  const { setWordNum, setScore } = useGlobalContext();

  const [globeData, setGlobeData] = useState({
    countries: {
      features: [],
    },
    points: {
      features: [],
    },
  });
  const [hoverD, setHoverD] = useState();
  useEffect(function () {
    fetch(
      "https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson"
    )
      .then((res) => res.json())
      .then(function (res) {
        setGlobeData({
          countries: res[0],
          points: res[1],
        });
      });
  }, []);

  return (
    <Globe
      animateIn={true}
      pointLat={"43.69114934433532"}
      pointLng={"-79.79535475454729"}
      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ"
      )}
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonStrokeColor={() => "#111"}
      onPolygonHover={setHoverD}
      polygonCapColor={(d) => (d === hoverD ? "steelblue" : "gray")}
      polygonLabel={function ({ properties: d }) {
        return `
                <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #FFFFFF;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px;">
                  <div style="font-family: 'Open sans', sans-serif; margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
                    ${d.ADMIN}
                  </div>
                  <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                  </div>
                </div>
              `;
      }}
      onPolygonClick={({ properties: d }) => {
        const name = d.ADMIN;
        if (name === country || d.NAME_LONG === country) {
          correctSound();
          setScore((score) => score + 1);
          setWordNum((abc) => abc - 1);
          getCapital();
        } else {
          setTries((tries) => tries + 1);
          WrongSound();
          if (tries === 2) {
            setTimeout(() => {
              setTries(0);
              setWordNum((abc) => abc - 1);
              getCapital();
            }, 2000);
          }
        }
      }}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    />
  );
}
