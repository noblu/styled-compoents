import React from 'react'

import styled from 'styled-components';

import bannerBottom from '../../images/jackpot.png';

import IconBannerTop from '../../images/Union.png';

import IconBannerBottom from '../../images/iconbannerbottom.png'
import Footer from './Footer';

const Wrapper = styled.div` 
width: 100%;
margin-top: 10px;
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
height: 192px;
width: 400px;
border-top-right-radius:16px;
border-top-left-radius:16px;
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
padding: 10px 25px;
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

function BannerBottom() {
    return (
        <Wrapper>
        <Context>
            <Img src={bannerBottom} alt='' />
            <Content >
                <Filter>
                    <Icon src={IconBannerTop} alt='' />
                    <Title>Jackpot Millions</Title>
                </Filter>
                <Filter>
                    <Icon src={IconBannerBottom} alt='' />
                    <H1>$10,000</H1>
                </Filter>
                    <Span>Draws in 01h 14m 20s</Span>
            </Content>
             <Footer/>
        </Context>
           </Wrapper>
    )
}

export default BannerBottom
