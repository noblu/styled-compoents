import * as React from "react";
import "./about.css";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import Backdrop from "../../Components/Backdrop/Backdrop";
import AboutBanner from "../../Components/AboutBanner/AboutBanner";
import Metaverse from "../../Components/Metaverse/Metaverse";
import Stats from "../../Components/Stats/Stats";
import Tokenomic from "../../Components/Tokenomic/Tokenomic";
import Galaxy from "../../Components/Galaxy/Galaxy";
import Roadmap from "../../Components/Roadmap/Roadmap";
import Faq from "../../Components/Faq/Faq";
import HowToBuy from "../../Components/HowToBuy/HowToBuy";
import AboutFooter from "../../Components/AboutFooter/AboutFooter";

function About() {
  return (
    <>
      <div className="container-xl">
        <Backdrop />
        <Topbar />
        <div id="content">
          <div className="row g-0">
            <Menu />
            <div className="col">
              <div id="mainContent">
                <div id="aboutPage">
                    <AboutBanner/>
                    <Stats/>
                    <Metaverse/>
                    <Tokenomic/>
                    <Galaxy/>
                    <Roadmap/>
                    <Faq/>
                    <HowToBuy/>
                    <AboutFooter/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
