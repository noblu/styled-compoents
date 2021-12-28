import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
width: 428px;
padding: 0 14px;
font-family: "Sen" ,sans-serif;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Content = styled.div``;

const H2 = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #2D1B0E;
`;

const P = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #98795C;
`;

const Button = styled.button`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
color: #98795C;
text-align: center;
letter-spacing: -0.015em;
border: 1px solid #98795C;
box-sizing: border-box;
border-radius: 16px;
background: #FFFFFF
`;

function HearderAuction() {
    return (
        <Wrapper>
            <Content>
                <H2>Latest Auction</H2>
                <P>You can chose $BNB or $BABU to bid.</P>
            </Content>
            <Button>View all</Button>
        </Wrapper>
    )
}


export default HearderAuction
