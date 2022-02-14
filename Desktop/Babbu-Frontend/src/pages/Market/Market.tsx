import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import Backdrop from "../../Components/Backdrop/Backdrop";
import StatsMarket from "../../Components/StatsMarket/StatsMarket";
import WrapMarket from "../../Components/WrapMarket/WrapMarket";
import { useEffect } from "react";
import NftDetail from "../../Components/NftDetail/nftDetail";


function Market() {
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
                <div id="marketAuctionPage">
                  <StatsMarket />
                  <WrapMarket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Market;
