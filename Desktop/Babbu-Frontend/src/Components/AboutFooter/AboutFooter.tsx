import "./aboutFooter.css";
import twitter from "./img/icon-twitter.svg";
import tele from "./img/icon-tele-circle.svg";
import medium from "./img/icon-medium-circle.svg";
import discord from "./img/icon-discord-circle.svg";
import twitch from "./img/icon-tele-circle.svg";

function AboutFooter() {
  return (
    <>
      <section className="footer">
        <div className="social d-flex align-items-center justify-content-center">
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={tele} alt="" />
          </a>
          <a href="#">
            <img src={medium} alt="" />
          </a>
          <a href="#">
            <img src={discord} alt="" />
          </a>
          <a href="#">
            <img src={twitch} alt="" />
          </a>
        </div>
        <div className="copyright">
          Copyright© 2021 BABBU. All rights reserved.
        </div>
      </section>
    </>
  );
}

export default AboutFooter;
