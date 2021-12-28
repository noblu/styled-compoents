import React from 'react'
import styled from 'styled-components'
import BannerBottom from './BannerBottom';
import BannerTop from './BannerTop';
import HearderGame from './HearderGame';



const Wrapper = styled.div`
padding: 20px 0;
`;

function Game() {
    return (
        <Wrapper>
            <HearderGame /> 
            <BannerTop /> 
            <BannerBottom/>
        </Wrapper>
    )
}

export default Game
