import * as React from "react";
import gamefi from './img/img-babbu-gamefi.png'
import token from './img/img-defi-token.png'
import farming from './img/img-nft-farming.png'

function Metaverse() {
  return (
    <>
      <section className="metaverse text-center">
        <h2 className="sectionHeading">Babbu Metaverse</h2>
        <h3 className="sectionSubHeading">Project Background</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="item">
              <img src={gamefi} alt="" />
              <h6 className="title">Babbu Gamefi</h6>
              <div>
                Babbu is the owner of products and services such as GameFi
                Gamebase, NFT Marketplace, NFT Mining, Farms and BuWallet. It is
                committed to providing high-quality P2E games for global game
                users.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={token} alt="" />
              <h6 className="title">Defi Token</h6>
              <div>
                Babbu is fair launched Defi Token. Three simple functions occur
                during each trade: Liquidity Provider (LP) Acquisition, Statics
                Rewards, Auto Burn.
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={farming} alt="" />
              <h6 className="title">NFT Farming</h6>
              <div>
                The provides complete NFT underlying tools, including NFT
                casting, trading, and mining, etc. Concurrently, it will also
                open up a variety of gameplay such as refinement and
                reproduction.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Metaverse;
