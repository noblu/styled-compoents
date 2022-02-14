import styled from 'styled-components'
import './farm.css'
import Backdrop from '../../Components/Backdrop/Backdrop'
import Topbar from '../../Components/Topbar/Topbar'
import Menu from '../../Components/Menu/Menu'
import { ButtonAngel } from '../../Components/Button/Button';
import { Image } from '../../Components/Images/Image'
import Gamebabbu from './img/icon-GameBabbu.png';
import BabbuAngel from './img/babbu-angel.png';
import BannerFarm from './BannerFarm'
import PicnicCat from './img/Logo-Fram.png';
import Farmbabbu from './Farmbabbu'

const Wrapper = styled.div`
width: 100%;
width: 814px;
display: flex;
margin-top: 15px;
@media screen and (max-width: 768px) {
width: 400px;
min-height: auto;
flex-direction: column;
align-items:center;
justify-content:center;
}
`;


const P = styled.p`
color:rgb(0,0,0);
background: #FFD6E7;
border-radius: 8px;
margin-left: 10px; 
padding: 0 7px;
`;

const Span = styled.span`
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;

@media screen and (max-width:768px){
font-size: 13px;
}

`;



const Strong = styled.strong`
color:#0FD545;
`;



function Farm() {
    return (
        <>
            <div className="container-xl farm">
                <Backdrop />
                <Topbar />
                <div id="content">
                    <div className="row g-0">
                        <Menu />
                        <div className="col">
                            <div id="mainContent">
                                <div id="gameness">

                                    <BannerFarm />
                               
                                    <Span>Stake BABU/BNB LP and Earn $BABU, share 2,200,000,000 $BABU - <Strong>Tutorial here</Strong> </Span>
                                    <Wrapper>
                                        <Farmbabbu />
                                        <Farmbabbu />
                                    </Wrapper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Farm;
