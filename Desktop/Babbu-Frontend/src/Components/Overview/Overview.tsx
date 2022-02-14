import { Link } from "react-router-dom";
import "./overview.css";
import iconBabbuFamily from "./img/icon-babbu-family.png";
import bounty from "./img/icon-babbu-bounty.png";
import farmer from "./img/icon-babbu-farmer.png";
import airdrop from "./img/icon-babbu-airdrop.png";
function Overview(): JSX.Element {
  return (
    <>
      <section className="overview">
        <h2 className="sectionHeading">BABBU Crypto Gaming</h2>
        <h3 className="sectionSubHeading">Play games, WIN REAL CASH!</h3>
        <div className="overviewCarousel owl-carousel owl-theme">
          <div className="item d-flex h-100 flex-column">
            <div className="col-auto">
              <img src={iconBabbuFamily} alt="" />
            </div>
            <h3 className="title col-auto">Babbu Family</h3>
            <div className="desc col">
              Provide gaming developers a series of gaming pre-launch supports,
              such as selling unique in-game assets in the form of NFT, Farms,
              NFT auction and trading marketplace, etc..
            </div>
            <Link to="#" className="col-auto">
              VISIT HOME
            </Link>
          </div>
          <div className="item d-flex h-100 flex-column">
            <div className="col-auto">
              <img src={bounty} alt="" />
            </div>
            <h3 className="title col-auto">Bounty</h3>
            <div className="desc col">
              Receive BABBU Bounty tasks, grow the BABBU family, and earn more
              $BABU!
            </div>
            <Link to="#" className="col-auto">
              GET LINK
            </Link>
          </div>
          <div className="item d-flex h-100 flex-column">
            <div className="col-auto">
              <img src={farmer} alt="" />
            </div>
            <h3 className="title col-auto">NFT Pool</h3>
            <div className="desc col">
              BABBU NFT Pool and "Stake-to-Earn" All NFTs issued by BABBU have
              the attribute of “HashRate”. The higher the HashRate, the faster
              the mining speed of the BABBU.
            </div>
            <Link to="#" className="col-auto">
              CONNECT WALLET
            </Link>
          </div>
          <div className="item d-flex h-100 flex-column">
            <div className="col-auto">
              <img src={airdrop} alt="" />
            </div>
            <h3 className="title col-auto">Galaxy Hole</h3>
            <div className="desc col">
              The Galaxy Hole owned over 50% of supply at launch. The Black Hole
              counts as one of the wallet holders that 4% of transactions are
              distributed
            </div>
            <Link to="#" className="col-auto">
              Explorer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Overview;
