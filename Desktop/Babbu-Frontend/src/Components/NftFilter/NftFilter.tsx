import "./nftFilter.css";
import magnify from "./img/icon-magnify.svg";
import sunstone from "./img/nft-sunstone.png";
import React, { useEffect } from "react";
import { Image } from "../Images/Image";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ListNft from "../ListNft/ListNft";
import MarketNft from "../ListNft/MarketNft";
import { Link } from "react-router-dom";

function AllModel({ onToggle, toggle, onFilter }: any) {
  return (
    <>
      <Modal isOpen={toggle}>
        <ModalHeader toggle={onToggle} style={{ justifyContent: "center" }}>
          Select NFT type
        </ModalHeader>
        <ModalBody>
          <Link to="#" onClick={() => onFilter(undefined, "All NFT")}>
            All NFT
          </Link>
          <Link
            to="#"
            onClick={() => {
              onFilter(0, "Babbu Family NFT");
            }}
          >
            Babbu Family NFT
          </Link>
          <Link
            to="#"
            onClick={() => {
              onFilter(3, "Bounty");
            }}
          >
            Bounty
          </Link>
          <Link
            to="#"
            onClick={() => {
              onFilter(1, "Babbu Friends Card");
            }}
          >
            Babbu Friends Card
          </Link>
          <Link
            to="#"
            onClick={() => {
              onFilter(2, "Crystal Stone");
            }}
          >
            Crystal Stone
          </Link>
        </ModalBody>
      </Modal>
    </>
  );
}

function AuctionHistoryModal({ toggleHistory, onToggleHistory }: any) {
  return (
    <>
      <Modal isOpen={toggleHistory}>
        <ModalHeader
          toggle={onToggleHistory}
          style={{ justifyContent: "center" }}
        >
          Select NFT type
        </ModalHeader>
        <ModalBody>
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#pills-auction-history-all"
                type="button"
                role="tab"
                aria-controls="pills-auction-history-all"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-auction-history-release"
                type="button"
                role="tab"
                aria-controls="pills-auction-history-release"
                aria-selected="false"
              >
                Release
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-auction-history-participation"
                type="button"
                role="tab"
                aria-controls="pills-auction-history-participation"
                aria-selected="false"
              >
                Participation
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-auction-history-all"
              role="tabpanel"
              aria-labelledby="pills-auction-history-all-tab"
            >
              <table className="table">
                <thead>
                  <tr>
                    <td>NFT</td>
                    <td>Latest Bid ($BABU)</td>
                    <td>Operate</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="row g-0 align-items-center">
                        <div className="col-auto nftImg">
                          <Image src={sunstone} width={40} height={40} />
                        </div>
                        <span>Sunstone (#410)</span>
                      </div>
                    </td>
                    <td>
                      <div className="number">532,896,178</div>
                      <div className="status text-green">Dealed</div>
                    </td>
                    <td>
                      <div>Profit has beenclaimed</div>
                      <div className="text-green">More &gt;</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

function MarketHistoryModal({ toggleHistoryMarket, onToggleHistory }: any) {
  return (
    <>
      <Modal isOpen={toggleHistoryMarket}>
        <ModalHeader
          toggle={onToggleHistory}
          style={{ justifyContent: "center" }}
        >
          Select NFT type
        </ModalHeader>
        <ModalBody>
          <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#pills-market-history-all"
                type="button"
                role="tab"
                aria-controls="pills-market-history-all"
                aria-selected="true"
              >
                All
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-market-history-onsale"
                type="button"
                role="tab"
                aria-controls="pills-market-history-onsale"
                aria-selected="false"
              >
                On Sale
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-market-history-sold"
                type="button"
                role="tab"
                aria-controls="pills-market-history-sold"
                aria-selected="false"
              >
                Sold
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#pills-market-history-bought"
                type="button"
                role="tab"
                aria-controls="pills-market-history-bought"
                aria-selected="false"
              >
                Bought
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="pills-market-history-all"
              role="tabpanel"
              aria-labelledby="pills-market-history-all-tab"
            >
              <table className="table">
                <thead>
                  <tr>
                    <td>NFT</td>
                    <td>Price ($BABU)</td>
                    <td>Operate</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="row g-0 align-items-center">
                        <div className="col-auto nftImg">

                          <Image src={sunstone} width={40} height={40}/>

                          <img src={sunstone} width={40} height={40} />

                        </div>
                        <span>
                          Sunstone (#410)
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="number">532,896,178</div>
                      <div className="status text-green">Sold</div>
                    </td>
                    <td>
                      <span className="text-green">
                        Hash
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

function NftFilter({ data, auction }: any) {
  const [useData, setUseData] = React.useState([]);
  const [subData, setSubData] = React.useState([]);
  const [filterTitle, setFilterTitle] = React.useState("All NFT");

  const [toggle, setToggle] = React.useState(false);
  const [toggleHistory, setToggleHistory] = React.useState(false);
  const [toggleHistoryMarket, setToggleHistoryMarket] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  useEffect(() => {
    setUseData(data);
    setSubData(data);
  }, [data]);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onToggleHistory = () => {
    if (auction) {
      setToggleHistory(!toggleHistory);
    } else {
      setToggleHistoryMarket(!toggleHistoryMarket);
    }
  };

  const onFilter = (type: any, title: any) => {
    if (type) {
      const newData = subData.filter((item: any) => item.type === type);
      setUseData(newData);
    } else {
      setUseData(subData);
    }
    onToggle();
    setFilterTitle(title);
  };

  const onChange = (e: any) => {
    if (e.target.value) {
      const newData = subData.filter((item: any) => {
        return item.title.toLowerCase().match(e.target.value);
      });
      setUseData(newData);
    } else {
      setUseData(subData);
    }
  };

  return (
    <>
      <div className="nftFilter d-flex align-items-center">
        <div className="dropdown allNft">
          <button className="btn dropdown-toggle" onClick={onToggle}>
            {filterTitle}
          </button>
        </div>
        <Dropdown
          isOpen={dropdownOpen}
          toggle={() => {
            setDropdownOpen(!dropdownOpen);
          }}
        >
          <DropdownToggle caret>Latest Bid</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Latest Bid</DropdownItem>
            <DropdownItem>End Time</DropdownItem>
            <DropdownItem>Latest Release</DropdownItem>
            <DropdownItem>Lowest Price</DropdownItem>
            <DropdownItem>Highest Price</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <form className="search ms-auto">
          <input
            type="text"
            placeholder="Please enter key..."
            onChange={onChange}
          />
          <button type="submit" className="icon">
            <Image src={magnify} />
          </button>
        </form>
        <button className="btn btnHistory" onClick={onToggleHistory}>
          History
        </button>
      </div>
      <div className="tab-content">
        <div
          className={auction ? "tab-pane fade show active" : "tab-pane fade"}
          id="pills-auction"
          role="tabpanel"
          aria-labelledby="pills-auction-tab"
        >
          <ListNft data={useData} />
        </div>
        <div
          className={!auction ? "tab-pane fade show active" : "tab-pane fade"}
          id="pills-auction"
          role="tabpanel"
          aria-labelledby="pills-auction-tab"
        >
          <MarketNft data={useData} />
        </div>
        {/* <TabPane
          className={!auction ? "tab-pane fade show active" : "tab-pane fade"}
        /> */}
      </div>
      <AllModel toggle={toggle} onToggle={onToggle} onFilter={onFilter} />
      <AuctionHistoryModal
        toggleHistory={toggleHistory}
        onToggleHistory={onToggleHistory}
      />
      <MarketHistoryModal
        toggleHistoryMarket={toggleHistoryMarket}
        onToggleHistory={onToggleHistory}
      />
    </>
  );
}

export default NftFilter;
