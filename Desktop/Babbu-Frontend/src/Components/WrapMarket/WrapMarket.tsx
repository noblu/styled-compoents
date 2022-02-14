import React, { useEffect } from "react";
import { getAllNFT } from "../../service";
import NftFilter from "../NftFilter/NftFilter";
import "./wrapMarket.css";

function WrapMarket() {
  const [auction, setAuction] = React.useState(true);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    getAllNFT().then((data) => {
      if (data.length) {
        setData(data);
      }
    });
  }, []);

  return (
    <>
      <section>
        <div className="navWrap">
          <ul className="nav nav-pills d-inline-flex justify-content-center">
            <li className="nav-item">
              <button
                style={{ marginLeft: 0 }}
                className={
                  auction
                    ? "nav-link custom-nav-link active"
                    : "nav-link custom-nav-link"
                }
                data-bs-toggle="pill"
                data-bs-target="#pills-auction"
                type="button"
                role="tab"
                aria-controls="pills-auction"
                aria-selected="true"
                onClick={() => setAuction(true)}
              >
                Auction
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={
                  auction
                    ? "nav-link custom-nav-link "
                    : "nav-link custom-nav-link active"
                }
                data-bs-toggle="pill"
                data-bs-target="#pills-market"
                type="button"
                role="tab"
                aria-controls="pills-market"
                aria-selected="false"
                onClick={() => setAuction(false)}
              >
                Market
              </button>
            </li>
          </ul>
        </div>
        <NftFilter data={data} auction={auction} />
      </section>
    </>
  );
}

export default WrapMarket;
