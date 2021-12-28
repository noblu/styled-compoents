import React from 'react'

import styled from 'styled-components'
import Banker from './Banker/banker';

import HearderAuction from './headerAuction';
import HearderSale from './headerSale';
import Sale from './Sale/Sale';

const Wrapper = styled.div`
width: 428px;
min-height: 100vh;
`;

const Context = styled.div`
display: flex;
margin-left: -1rem;
flex-flow: row wrap;
margin: 0 auto;
`
function Auction() {
    return (
        <Wrapper>
             <HearderAuction/>
                <Context>  
                   <Banker />
                   <HearderSale />
                   <Sale/>
                </Context>
        </Wrapper>
    )
}

export default Auction
