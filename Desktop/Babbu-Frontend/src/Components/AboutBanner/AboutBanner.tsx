import "./aboutbanner.css";
import twitter from './img/icon-twitter.svg';
import tele from './img/icon-tele-circle.svg';
import medium from './img/icon-medium-circle.svg';
import discord from './img/icon-discord.svg';
import twitch from './img/icon-twitch.svg';

function AboutBanner(): JSX.Element {
  return (
    <>
      <section className="banner">
        <div className="textGroup-1 text-uppercase">
          <strong className="text-1">BABBU</strong>
          <span className="text-2">METAVERSE</span>
        </div>
        <div className="textGroup-2 text-uppercase">
          <span className="text-3">PLAY</span>
          <span className="text-4 text-lowercase">to</span>
          <strong className="text-5">EARN</strong>
        </div>
        <p>
          The decentralized Meme coin grows into Babbu’s gamebase Metaverse.
          Gamefi + NFT + Trading market + NFT issuance and incubation platform
          to create ecological products.
        </p>
        <div className="d-flex align-items-center">
          <a href="#" className="btn bg-brown rounded buy">
            Buy $BABU
          </a>
          <a href="#" className="btn rounded launch">
            Launch App
          </a>
          <div className="social d-flex align-items-center">
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
        </div>
      </section>
    </>
  );
}

export default AboutBanner;
