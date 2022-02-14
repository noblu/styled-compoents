import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Image } from '../Images/Image';
import Metamask from './icons/Metamask_logo.svg'
import yourAddress from './configyour';
import './modal.css'
import IconCoppy from './icons/copy.svg'
import Babalance from './icons/bababu-balance.svg'
import BUSDbalance from './icons/busd.svg'
import BNBbalance from './icons/bnbbalance.svg'
import CheckSwap from './icons/check-Swap.svg'
import prevSwap from './icons/prev-Swap.svg'
import BlockSwap from './icons/block-Swap.svg'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';
import { getBalanceBNB, getBalanceBUSD } from '../../features/connectionSlice';
import { bnbBalanceSelector, busdBalanceSelector } from '../../features/selectors';
import Web3Modal from "web3modal";
import Wallet from './icons/iconbook.svg'
import MyNFT from './icons/money-2.svg'
import Profile from './icons/user.svg'
import Modal from './MyFamilyNftModal';

const AppWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1040;
width: 100vw;
height: 100vh;
background-color: #000;
opacity: 0.5;
`


const Wrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1050;
width: 100%;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
outline: 0;
`;

const Content = styled.div`
z-index: 100;
background: #ffffff;
position: relative;
margin: 1.75rem auto;
border-radius: 12px;
max-width: 450px;
min-height: 600px;
padding: 2rem;
`;

const Filter = styled.div`
display: flex;
align-items: center;
justify-content:center ;

`;


const Button = styled.button`
  font-size: .9rem;
  font-weight: 700;
  border: 1px solid #000000;
  border-radius: 3px;
  padding: .3rem 1rem;
  margin-left: .5rem;
  background-color:  #f5e8db;
  position:absolute;
  top:30px;
  right: 20px;

`;

const ContentModal = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0;
`;
const Span = styled.span`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #47131A;
text-align: center;
margin: 0 5px;
`;


const WalletCard = styled.div`
display: flex;
align-items: center;
flex-direction:column;
margin: 15px 10px;
background: #FFFFFF;
border: 1px solid #EBE8E2;
box-sizing: border-box;
border-radius: 12px;
padding: 15px 20px;
cursor: pointer;
&:hover {
  background: #FDF1CC;
}
`;

const Line = styled.div`
border: 1px solid #EBE8E2;
margin:15px 10px;
`;

const Container = styled.div`
background: #FFFAD9;
border-radius: 12px;
margin: 10px 10px;
padding: 10px 10px;
display: flex;
justify-content: space-around;
position: relative;

`;

const ContentTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 10px;
padding: 0px 10px 0px 10px;
`;

const SpanMoney = styled.span`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: right;
letter-spacing: -0.015em;
color: #000000;

`;

const SpanBaBuBn = styled.span`
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.015em;
color: #98795C;
`;

const WalletMoneyBabbu = styled.div`
display: flex;
align-items: center;
border: 1px solid #FFFAD9;
box-sizing: border-box;
margin: 0 10px;
padding: 10px 10px;
border-radius: 12px;
cursor: pointer;
background:#FFFAD9;
`;
const WalletMoney = styled.div`
display: flex;
align-items: center;
border: 1px solid #FFFAD9;
box-sizing: border-box;
margin: 0 10px;
padding: 10px 20px;
border-radius: 12px;
background:#FFFAD9;
cursor: pointer;
`;

const CopyAccount = styled.div`
display: flex;
`;

const CopySpan = styled.span`
position: absolute;
top:-10px;
right: 0;
`;

const ButtonDisconnect = styled.button`
background: #FC346D;
border-radius: 12px;
width: 370px;
padding: 10px;
color: #F7F7F7;
`;
//@ts-ignore
const AddressConnect = ({ isShowing, hide, babbuBalance, accountAddress }) => {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const dispatch = useDispatch()
  const bnbBalance = useSelector(bnbBalanceSelector)
  const busdBalance = useSelector(busdBalanceSelector)
  const [isModalOpen, setisModalOpen] = useState(false);
  
 

  const providerOptions = {};
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions // required
  });

  async function disconnect() {
    await web3Modal.clearCachedProvider();
    //@ts-ignore
    setAccountAddress(null)
  }


// const handleNft = (name: any) => {
//   if(name == 'My NFT' ) {
//     setIsName(e.target.name.value)
//   }
// }

const openModal = () => {
  setisModalOpen(true);
  
}


  async function getBNBBalance() {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //@ts-ignore
    provider.getBalance(accounts[0]).then((balance) => {
      let etherString = ethers.utils.formatEther(balance);
      dispatch(getBalanceBNB(etherString));
    });
  }


  async function getBUSDBalance() {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BUSD_TOKEN_ADDRESS as string, import.meta.env.VITE_BUSD_TOKEN_ABI as string, signer);
    let balancebusd = await contract.balanceOf(accounts[0]);
    const BalanceOfbusd = ethers.utils.formatUnits(balancebusd, 18)
    dispatch(getBalanceBUSD(BalanceOfbusd))
    //console.log("Balancebusd: " +  BalanceOfbusd);
  }


  useEffect(() => {
    getBNBBalance();
  }, [accountAddress]);

  useEffect(() => {
    getBUSDBalance();
  }, [accountAddress])

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };



  // console.log(babbuBalance);
  // console.log(accountAddress);
  // console.log(bnbBalance);
  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <AppWrapper />
      <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <Content>
          <Filter>
            <Image src={Metamask} />
            <Span>
              {accountAddress.length > 0 ? `${accountAddress.slice(0, 8)}...${accountAddress.slice(accountAddress.length - 8, accountAddress.length)}` : "0.0"}
            </Span>
            <Button className="modal-close-button" type="button" aria-setsize={5} data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </Filter>
          <ContentModal title="Connect to a wallet">
          <Modal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}  />
               <WalletCard  >
                <Image src={ Wallet} />
                <Span>Wallet</Span>
              </WalletCard>
               <WalletCard onClick={openModal} >
                <Image src={MyNFT} />
                <Span>MyNFT</Span>
              </WalletCard>
               <WalletCard  >
                <Image src={Profile} />
                <Span>Profile</Span>

              </WalletCard>
            {/* {yourAddress.map((item, index) => (
              <WalletCard key={index} >
                <Image src={item.img} />
                <Span>{item.name}</Span>

              </WalletCard>
            ))} */}
          </ContentModal>
          <Line />
          <h6 className='your-address'>Your Address</h6>
          <Container>
            <CopyToClipboard text={accountAddress} onCopy={onCopyText}>
              <CopyAccount>
                <span className='your-address-title'
                  // @ts-ignore
                  value={accountAddress}
                  onChange={(event: any) => setText(event.target.value)} >{accountAddress.length > 0 ? `${accountAddress.slice(0, 35)}...${accountAddress.slice(accountAddress.length)}` : "0.0"}</span>
                <Image className='iconcopy' src={IconCoppy} id="copy" />
                <CopySpan className={`copy-feedback ${isCopied ? "active" : ""}`}>
                  copied
                </CopySpan>
              </CopyAccount>
            </CopyToClipboard>
          </Container>
          <ContentTitle>
            <div>
              <Image className='ba-balance' src={Babalance} />
              <SpanBaBuBn>BABBU Balance:</SpanBaBuBn>
            </div>
            <SpanMoney>{babbuBalance}</SpanMoney>
          </ContentTitle>
          <ContentTitle>
            <div>
              <Image className='busd-bnb' src={BUSDbalance} />
              <SpanBaBuBn>BUSD Balance:</SpanBaBuBn>
            </div>
            <SpanMoney>{busdBalance}</SpanMoney>
          </ContentTitle>
          <ContentTitle>
            <div>
              <Image className='busd-bnb' src={BNBbalance} />
              <SpanBaBuBn >BNB Balance:</SpanBaBuBn>
            </div>
            <SpanMoney>{bnbBalance}</SpanMoney>
          </ContentTitle>
          < Line />
          <h6 className='your-address'>Add Token to Wallet</h6>
          <ContentModal >
            <WalletMoneyBabbu>
              <Image className='babbu-balance' src={Babalance} />
              <Span>BABBU</Span>
            </WalletMoneyBabbu>
            <WalletMoney>
              <Image src={BUSDbalance} />
              <Span>BUSD</Span>
            </WalletMoney>
            <WalletMoney >
              <Image src={BNBbalance} />
              <Span>BNB</Span>
            </WalletMoney>
          </ContentModal>
          <h6 className='your-address'>Recent Transactions</h6>
          <div className='name-hashrate'>
            <span className='name__hashrate'>Name</span>
            <span className='name__hashrate'>Hashrate</span>
          </div>
          <Line />
          <div className='name-hashrate'>
            <div>
              <Image src={CheckSwap} />
              <span className='check__swap'>Swap 10 $BNB for 40200 $BABBU</span>
            </div>
            <Image className='prev__swap' src={prevSwap} />
          </div>
          <Line />
          <div className='name-hashrate'>
            <div>
              <Image src={BlockSwap} />
              <span className='check__swap'>Swap 10 $BNB for 120000 $BABBU</span>
            </div>
            <Image className='prev__swap' src={prevSwap} />
          </div>
          <span className='no__found'>No result found.</span>
          <ButtonDisconnect onClick={disconnect}>Disconnect Wallet</ButtonDisconnect>
        </Content>
      </Wrapper>
    </React.Fragment>, document.body
  ) : null;
};

export default AddressConnect;