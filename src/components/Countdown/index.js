import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

import "./Countdown.css";
import logo from "./logo.png";
import techclublog from "./techclublogo.png";
import iiclogo from "./iiclogo.png";
import gdsclogo from "./gdsclogowhite.png";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("February 28, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,

          // backgroundColor: 0x031d26
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="Countdown" id="#Countdown" ref={myRef}>
      <section className="container">
        <section className="timer">
          <img src={techclublog} style={{height: 95,width: 90,marginLeft: 60}} className="smalllogo" alt="techclub logo"></img>
          <img src={gdsclogo} style={{height: 250,width: 170}} className="smalllogo" alt="gdsc logo"></img>
          <img src={iiclogo} style={{height: 100,width: 170}} className="smalllogo" alt="logo"></img>
          <h5 style={{textAlign: 'center',fontStyle: 'italic', color: '#fff',fontFamily: 'sans-serif',fontWeight: 700}}>PRESENTS</h5>
          <div>
            <img src={logo} className="logo" alt="logo"></img>
          </div>
          <div>
            <h4 style={{color: 'crimson', fontWeight: 700}}>28th February to 1st March</h4>
          </div>
          <div className="clock">
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerDays}</div>
                <div className="clock-txt">DAYS</div>
              </div>
              <div className="clock-seperator">:</div>
            </div>
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerHours}</div>
                <div className="clock-txt">HOURS</div>
              </div>
              <div className="clock-seperator">:</div>
            </div>
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerMinutes}</div>
                <div className="clock-txt">MINUTES</div>
              </div>
              <div className="clock-seperator">:</div>
            </div>
            <div className="clock-section">
              <div className="clock-wrap">
                <div className="clock-timer">{timerSeconds}</div>
                <div className="clock-txt">SECONDS</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Countdown;
