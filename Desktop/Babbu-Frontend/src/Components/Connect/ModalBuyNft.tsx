import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {ButtonBuyNft} from '../Button/Button'
import BNB from '../BoxGames/img/BNB.png'
import { Image } from '../Images/Image';
import { Link } from 'react-router-dom';

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
margin: 5.75rem auto;
border-radius: 12px;
max-width: 400px;
height: 400px;
padding: 2rem;
`;

const Filter = styled.div`
display: flex;
align-items: center;
justify-content:center ;

`;

const H4 = styled.h4`
font-family: Sen;
width: 200px;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 26px;
text-align: center;
margin-bottom: 20px;
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

const ContentModal = styled.div`
width: 326px;
height: 106px;
background-color: rgba(235, 232, 226, 0.4);
border-radius: 12px;
margin-top: 20px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-left: 5px;
`;
const Span = styled.span`
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #47131a;

`;

const Strong = styled.strong`
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #F6B200;
`;

const H6 = styled.h6`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 43px;
text-align: center;
letter-spacing: -0.015em;
color: #47131A;
margin-left: 10px;
`;

const PriceBNB = styled.div`
margin-top: 10px;
display: flex;
justify-content: space-between;
margin-left: 5px;
`;

const WalletCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const ButtonBid = styled.button`
width: 326px;
height: 48px;
background: #FFE000;
border-radius: 12px;
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #47131A;
margin-right: 10px;
margin-top: 20px;
`;
//@ts-ignore
const ModalBuyNft = ({ isShowing, hide }) => {

  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <AppWrapper />
      <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <Content>
          <Filter>
            <H4>
              Auction payment confirmation
            </H4>
            <Button className="modal-close-button" type="button" aria-setsize={5} data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </Button>
          </Filter>
          <ButtonBuyNft />
          <ContentModal>
            <WalletCard>
              <Image src={BNB} />
              <H6>2.3991</H6>
            </WalletCard>
             <Span>Price ($BNB) ≈ <Strong>$2,686</Strong></Span> 
          </ContentModal>
          <PriceBNB>
            <span><Link to="#">Buy $BABU</Link></span> 
            <span>Your Balance: 22.55 BNB</span> 
          </PriceBNB>
          <ButtonBid>Confirm Bid</ButtonBid>
          </Content>
      </Wrapper>
    </React.Fragment>, document.body
  ) : null;
};

export default ModalBuyNft;