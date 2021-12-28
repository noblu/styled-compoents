
import React from "react";
import Auction from "components/AuctionBabbu/Auction";
import Banner from "components/BannerBabbu/BannerBabbu";
import Game from "components/GamesBabbu";
import Giftbox from "components/GifboxBabbu/GifboxBabbu";
// import HeaderBabbu from "components/HeaderBabbu/HeaderBabbu";
import JoinOur from "components/JoinBabbu/JoinBabbu";


import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;

function Home() {
    return (
            <Wrapper>
                {/* <HeaderBabbu/> */}
                <Banner/>
                <Giftbox/>
                <Game/>
                <JoinOur/>
               <Auction/>
            </Wrapper>
        );
}
export default Home;
