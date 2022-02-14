// import { useEffect } from "react";
import Menu from "../../Components/Menu/Menu";
import Topbar from "../../Components/Topbar/Topbar";
import Backdrop from "../../Components/Backdrop/Backdrop";
// import StatsMarket from "../../Components/StatsMarket/StatsMarket";
// import WrapMarket from "../../Components/WrapMarket/WrapMarket";
import NftDetail from "../../Components/NftDetail/nftDetail";

function MarketDetail() {
  // useEffect(() => {
  //   // let url = new URL(window.location.href);
  //   // url.search = new URLSearchParams(data);
  // }, []);
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
                  <NftDetail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketDetail;
