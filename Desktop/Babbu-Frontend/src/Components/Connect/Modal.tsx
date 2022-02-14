import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import config from './config';
import { Image } from '../Images/Image';
import { ethers } from 'ethers';
import Web3Modal from "web3modal";

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
max-width: 500px;
height: 600px;
padding: 2rem;
`;

const Filter = styled.div`
display: flex;
align-items: center;
justify-content:center ;

`;

const H4 = styled.h4`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 26px;
text-align: center;
color: #47131A;

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

const ContentModal = styled.div``;
const Span = styled.span`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 19px;
color: #47131A;

`;


const WalletCard = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 15px 10px;
background: #FFFFFF;
border: 1px solid #EBE8E2;
box-sizing: border-box;
border-radius: 12px;
padding: 5px 20px;
cursor: pointer;
&:hover {
  background: #FFF5B0;
}
`;
//@ts-ignore
const Modal = ({ isShowing, hide}) => {
 
  // const [connector, setConnector] = useState(false)
   //@ts-ignore
  let provider : ethers.providers.Web3Provider = null ;
  
  const web3Modal = new Web3Modal();
  const [account, setAccount] = useState('')
 
  const isMetaMaskConnected = async () => {
  
    let provider = new ethers.providers.Web3Provider(window.ethereum);
     
    let signer = await provider.getSigner(); 
    setAccount(await signer.getAddress());  
  }
// @ts-ignore
 useEffect(async () => {
  await isMetaMaskConnected();
   });
 
  async function connect() {  
    const connection = await web3Modal.connect()
    await isMetaMaskConnected();
    
    
  }

  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <AppWrapper/>
      <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <Content>
           <Filter>
            <H4>
            Connect to Wallet
            </H4>
            <Button  className="modal-close-button" type="button"  aria-setsize={5} data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </Filter>
      
          <ContentModal  title="Connect to a wallet">
          {config.map((item, index) => (
      <WalletCard key={index} onClick ={connect}>
         <Span>{item.title}</Span>
        <Image src={item.icon} />
      </WalletCard>
    ))}
    </ContentModal>
        </Content>
      </Wrapper>
    </React.Fragment>, document.body
  ) : null;
};

export default Modal;