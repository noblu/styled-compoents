import React from 'react'

import styled from 'styled-components';

import bannerTop from '../../images/bannerTop.png';

import IconBannerTop from '../../images/iconbannertop.png';

import IconBannerBottom from '../../images/iconbannerbottom.png'
import Footer from './Footer';

const Wrapper = styled.div` 
width: 100%;
padding: 0 14px;
font-family: "Sen", sans-serif;
`;

const Context = styled.div`
height: 256px;
background-color: #F7F7F7;
border-radius: 16px;
position: relative;
`



const Img = styled.img`

`;

const Content = styled.div`
position: absolute;
top: 24px;
left: 23px;
flex-shrink: 0;


`;



const H1 = styled.h1`
color: #47131A;
font-weight: 700;
font-size: 32px;
line-height: 39px;
`;

const Span = styled.span`
color: #FFFAD9;
font-weight: 700;
font-size: 14px;
line-height: 17px;
text-align: center;
background-color: #47131A;
border-radius: 12px;
padding: 7px 15px;
`;

const Filter = styled.div`
display: flex;
align-items: center;
flex: 1;
margin-bottom: 10px;
`;

const Title = styled.p`
color:#583A1E;
font-weight: 700;
font-size: 14px;
line-height: 17px;
`;
const Icon = styled.img`
margin: -20px 5px 0 0;
object-fit: cover;
flex-shrink: 0;
`;



function BannerTop() {
    return (
        <Wrapper>
            <Context>
                <Img src={bannerTop} alt='' />
                <Content >
                    <Filter>
                        <Icon src={IconBannerTop} alt='' />
                        <Title>Play and win!</Title>
                    </Filter>
                    <Filter>
                        <Icon src={IconBannerBottom} alt='' />
                        <H1>$10,000</H1>
                    </Filter>
                        <Span>BID in: 1m 20s</Span>
                </Content>
                 <Footer/>
            </Context>
           
        </Wrapper>
    )
}

export default BannerTop
