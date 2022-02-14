
import styled from "styled-components"
import { Image } from "../../Components/Images/Image";
import IconBell from './img/icon-bell.svg';
import GameBase from './img/GAMEBASE.png';
import NFT from './img/NFT.svg';
import LogoBanner from './img/logo-banner.svg';
import './banner.css';
const Wrapper = styled.div`
    background: #ffd527;
	border-radius: 10px;
	height: 230px;
    position: relative;
    padding-left: 26px;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
        width: 400px;
        background-color: #fff;
    }
`;

const Content = styled.div`
display: flex;
@media screen and (max-width: 768px) {
    flex-direction:column; 
    width: 100%;
    hight: auto;
}
`;
const ContentLeft = styled.div`
flex: 1;
width: 100%;
`;
const ContentRight = styled.div`
flex: 1;
`;
const SpanSub = styled.span`
display: flex;
background: #47131A;
border-radius: 10px;
width: 100px;
justify-content: space-around;
align-items: center;
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 100%;
height: 30px;
 margin: 28px 0 25px 0px;
cursor: pointer;
@media screen and (max-width:768px){
    background:#ffd527;
}
`;


const Span = styled.span`
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #000000;
@media screen and (max-width:768px) {
    width:190px;
    float:left;
}
`;

function Banner():JSX.Element {
    return (
        <>
             <Wrapper>
               <Content>
                   <ContentLeft>
                       <SpanSub className="banner-top">
                           <Image src= {IconBell} />
                           <p>Subcrible</p>
                       </SpanSub>
                       <Span>Please fill in your email and make a subscription, we will notify you 24h before the BlindBox is on sale</Span>
                       <Image className = 'gamebase' src= {GameBase}/>
                   </ContentLeft>
                   <ContentRight>
                       <Image className = 'logobanner' src={LogoBanner}/>
                       <Image className = 'nft' src= {NFT}/>
                      
                   </ContentRight>
                </Content>                        
             </Wrapper>
        </>
    )
}

export default Banner
