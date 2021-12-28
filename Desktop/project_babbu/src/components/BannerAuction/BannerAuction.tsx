import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
padding: 0 14pxpx;
font-family: 'Sen', sans-serif;
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto;

`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const Span = styled.span`

font-size: 28px;
line-height: 34px;
font-weight: 700;

`;


const Title = styled.p`
font-size: 14px;
line-height: 17px;
font-weight: 400;
margin: 0;
`


const Context = styled.div`
    background-color: #FFE000;
    border-radius: 16px;
    width: 400px;
    height: 318px;
    display: flex;
    color: #47131A;
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
    justify-content: center;
  
`

function BannerAuction() {
    return (
        <Wrapper>
        <Context>
            <Content>
                <Span>$39,557,856</Span>
                <Title>Total Turnover</Title>
            </Content>
            <Content>
                <Span>45,194</Span>
                <Title>Total Transaction Times</Title>
            </Content>
            <Content>
                <Span>12,381</Span>
                <Title>Total Auction Times</Title>
            </Content>
            <Content>
                <Span>$1,019,089</Span>
                <Title>Total Auction Commission</Title>
            </Content>
        </Context>

        </Wrapper>
   )
}

export default BannerAuction
