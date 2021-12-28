import React from 'react'

import BabbuFamily from '../../images/BabbuFamily.png';
import Bounty from '../../images/Bountynew.png';

import { Wrapper, H1, P, Filter, Content, Img, H3, Span, Button } from './styled';



function Giftbox() {
    return (
        <Wrapper>
            <H1>BABBU Gaming</H1>
            <P>Play games, WIN REAL CASH!</P>
            <Filter>
                 <Content>
                <Img src={BabbuFamily} alt=''  />
                <H3>Babbu Family </H3>
                <Span>Provide gaming developers a series of gaming pre-launch supports, such as selling unique in-game assets in the form of NFT, Farms, NFT auction and trading marketplace, etc..</Span>
                <Button>VISIT HOME</Button>
            </Content>
            <Content>
                <Img src={Bounty} alt='' />
                <H3>Bounty</H3>
                <Span>Receive BABBU Bounty tasks, grow the BABBU family, and earn more $BABU!</Span>
                <Button>GET LINK </Button>
            </Content>
            </Filter>
           
        </Wrapper> 
         )
}

export default Giftbox
