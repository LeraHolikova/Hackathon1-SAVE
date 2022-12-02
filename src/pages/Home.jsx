import React, { useRef, useEffect } from "react";
import homeVideo from "../assets/homeVideo.mp4";
import "./Home.css";
<<<<<<< HEAD
import City from "../components/city/City";
import CurrencyConverter from "../components/currencyConverter";
import Modal from "../components/city-modal";
import ModalDetails from "../components/modal-details";
import { city } from "../tips-data";
=======
import logo2 from "../assets/logo2.png";

import City from "../components/city/City";
>>>>>>> 5c52ea1693b4f70a88390707e261593f20a6a60a

const Home = () => {
  const video = useRef(null);
  useEffect(() => {
    video.current.play();
    // .then(msg => console.log('msg from play' + msg + video.current))
    // .catch(err => console.log('error from play' + err))
  });

  return (
    <div className="body">
      <div className="logoMobile">
        <i>
          <img src={logo2} alt="logo" />
        </i>
      </div>
      <section>
        <div className="home">
          <video
            ref={video}
            src={homeVideo}
            type="video/mp4"
            playsInline
            autoPlay
            loop
            muted
          />
          <div className="save-title">
            <h1>What is $AV€ ?</h1>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* <CurrencyConverter /> */}
      <div>
        <Modal>
          {city.map((e) => {
            return (
              <ul>
                <h3>{e.tipTitle}</h3>
                <li>{e.tip}</li>
              </ul>
            );
          })}
        </Modal>
        <City
          citytitle={"Berlin"}
          videosrc={"https://www.youtube.com/embed/hVfBQNENS9s?start=22"}
        />
      </div>
=======

      {/* <CurrencyConverter /> */}
      <City
        citytitle={"Berlin"}
        videosrc={"https://www.youtube.com/embed/hVfBQNENS9s?start=22"}
      />
>>>>>>> 5c52ea1693b4f70a88390707e261593f20a6a60a

      <City
        citytitle={"Paris"}
        videosrc={"https://www.youtube.com/embed/oz45k8EYblk?start=10"}
      />

      <City
        citytitle={"Amsterdam"}
        videosrc={"https://www.youtube.com/embed/YaAwSaMYDyU?start=9"}
      />
    </div>
  );
};

export default Home;
