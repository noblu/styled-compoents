import React, { useEffect } from "react";
import { Image } from "../Images/Image";
import share from "./img/share.png";
import info from "./img/info.png";
import Information from "./img/Information.png";
import icon from "./img/icon-logo.svg";
import styled from "styled-components";
import "./nftDetail.css";
import { useParams } from "react-router-dom";
import { getOneNFT } from "../../service";
import { ethers } from "ethers";
import useModal from '../../Components/Connect/useModal'
import ModalBuyNft from '../../Components/Connect/ModalBuyNft'

const CountdownTitle = styled.div`
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.015em;
  color: #98795c;
`;

const Button = styled.button`
  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  background: #ffe000;
  border-radius: 12px;
  width: 100%;
  padding: 15px 0;
  margin-left: 0;
  margin-top: 15px;
`;

const SpanPrice = styled.span`
  font-family: Sen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #0fd545;
`;

const Tab = styled.div`
  display: flex;
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #98795c;
  border-bottom: 1px solid #d3c8bd;
  padding-bottom: 13px;
`;

const TitleTab = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #47131a;
`;

const Rebate = styled.div``;
//@ts-ignore
function NftDetail() {
  const params = useParams();
  const [data, setData] = React.useState(null);
  const [account, setAccount] = React.useState(null);
  const [price, setPrice] = React.useState(1);
  const { isShowing, toggle } = useModal();


  useEffect(() => {
    getAmountBabu();
  }, []);

  useEffect(() => {
    getOneNFT(params.id).then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);

  const onUpMarket = async (number: any) => {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_MARKET_ADDRESS as string, import.meta.env.VITE_BABBU_MARKET_ABI as string, signer
    );

    try {
      contract
        .createAuction(number, "10000000000", 1643082515, 1643255315)
        .then(console.log);
      alert('Up to market success.')
    } catch (err) {
      alert('Up to market fail.')
    }
  };

  // const getBuyNFT = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   let contract = new ethers.Contract(import.meta.env.VITE_BABBU_MARKET_ADDRESS as string, import.meta.env.VITE_BABBU_MARKET_ABI as string, signer);
  //   try {
  //     await contract.buyNft().then(console.log);
  //     alert('buyNft on market success.')
  //   } catch (error) {
  //     alert('buyNft fail.')
  //   }

  // } 


  const getAmountBabu = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    setAccount(accounts[0]);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const ADDRESS = import.meta.env.VITE_BABBU_TOKEN_ADDRESS;
    const ABI = import.meta.env.VITE_BABBU_TOKEN_ABI;
    //@ts-ignore
    let contract = new ethers.Contract(ADDRESS, ABI, signer);
    const balance = await contract.balanceOf(accounts[0]);
    return balance;
  };

  return (
    <>
      <div className="listNft">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-6">
            <div className="item">
              <div className="top bg-soft-pink" style={{ height: 510 }}>
                <div className="custom-header">
                  <div>
                    <span className=" green-custom">LIVE</span>
                    <span className=" bg-yellow-grad yellow-custom">160x</span>
                  </div>
                  <div>
                    <span style={{ marginRight: 5 }}>
                      <Image src={share} />
                    </span>
                    <span className="">
                      <img src={info} alt="" />
                    </span>
                  </div>
                </div>
                <Image src={
                  // @ts-ignore
                  data?.image || ""} className="custom-image" />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 col-6">
            <div className="item">
              <div className="top bg-soft-yellow" style={{ height: 510 }}>
                <div className="custom-header">
                  <span className="header-title">{
                    // @ts-ignore
                    data?.title} (#6810)</span>
                </div>
                <div className="countdown">
                  <CountdownTitle>Countdown:</CountdownTitle>
                  <div className="header-title">08h 08m 08s 08</div>
                </div>
                <div className="countdown">
                  <CountdownTitle>Recent Bid ($BABU):</CountdownTitle>
                  <div className="header-title">66,000,000</div>
                </div>
                <div className="">
            
                  {/* <Button onClick={() => {
                    // @ts-ignore
                    onUpMarket(data?._id)
                  }}>

                    Bid now (Price increase 10%)
                  </Button> */}
                  <Button onClick={toggle}> Bid now (Price increase 10%)</Button>
                  { <ModalBuyNft isShowing={isShowing} hide={toggle} /> }
                  {/* <Button onClick={toggle}> Bid now (Price increase 10%)</Button>
                  <ModalBuyNFT isShowing={isShowing} hide={toggle} /> */}
                </div>
                <Rebate className="">
                  Rebate from last bid ($BABU)：
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={icon} alt="" width={17} />
                    <SpanPrice>13,310,000</SpanPrice>
                  </div>
                </Rebate>
                <Tab>
                  <div className="tabNormal tabActive">On-chain data</div>
                  <div className="tabNormal">Details</div>
                </Tab>
                <TitleTab>
                  <div>Owner</div>
                  <div>0xA66A...dFE6</div>
                </TitleTab>
                <TitleTab>
                  <div>Contract address</div>
                  <div>0xd6b2...5780</div>
                </TitleTab>
                <TitleTab>
                  <div>Token ID</div>
                  <div>#218</div>
                </TitleTab>
                <TitleTab>
                  <div>Mining HashRate</div>
                  <div>574 </div>
                </TitleTab>
                <TitleTab>
                  <div>Asset Protocol</div>
                  <div>ERC721</div>
                </TitleTab>
                <TitleTab>
                  <div>Asset public chain</div>
                  <div>BSC</div>
                </TitleTab>
              </div>
            </div>
          </div>
        </div>
        <div className="row custom">
          <div className=" col-12">
            <div className="history">
              <div className="header-title ">Bid history</div>
              <div>
                My Profits：<span style={{ fontWeight: "bold" }}>0 BNB</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="history-table">
              <table>
                <tr>
                  <th>Address</th>
                  <th>Hash</th>
                  <th>Auction Price ($BABU)</th>
                  <th>Auction Time</th>
                  <th>
                    Profits <Image src={Information} />
                  </th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>0xfc5a...ad76</td>
                  <td>0x6fa2...a237</td>
                  <td>732,050,000</td>
                  <td>Now 7, 2021, 20:33</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>0xfc5a...ad76</td>
                  <td>0x6fa2...a237</td>
                  <td>732,050,000</td>
                  <td>Now 7, 2021, 20:33</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>0xfc5a...ad76</td>
                  <td>0x6fa2...a237</td>
                  <td>732,050,000</td>
                  <td>Now 7, 2021, 20:33</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>0xfc5a...ad76</td>
                  <td>0x6fa2...a237</td>
                  <td>732,050,000</td>
                  <td>Now 7, 2021, 20:33</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>0xfc5a...ad76</td>
                  <td>0x6fa2...a237</td>
                  <td>732,050,000</td>
                  <td>Now 7, 2021, 20:33</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </table>
            </div>
          </div> 
         </div>
      </div>
    </>
  );
}

export default NftDetail;
