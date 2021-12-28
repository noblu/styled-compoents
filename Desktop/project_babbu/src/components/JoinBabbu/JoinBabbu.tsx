import React from 'react'

import styled from 'styled-components';
import discord_icon from '../../images/discord_icon.png'
import iconmail from '../../images/iconmail.png'
import NFT_Home from '../../images/NFT_Home.png'
import telegram_icon from '../../images/telegram_icon.png'
import twitter_icon from '../../images/twitter_icon.png'

const H2 = styled.h2`
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #2D1B0E;
`;

const Wrapper = styled.div`
width: 100%;
padding: 0 14px;
margin-bottom: 30px;
`;

const Content = styled.div``;

const Span = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #47131A;
`;

const Icon = styled.img`
margin: 20px 10px 0 0 ;
`;



function JoinOur() {
    return (
        <Wrapper>
            <H2>Join Our Community</H2>
            <Span>Join our vibrant community of game players and NFT enthusiasts and study all the latest tips and tricks.</Span>
            <Content>
                <Icon src={discord_icon} alt='' />
                <Icon src={iconmail}  alt='' />
                <Icon src={NFT_Home} alt='' />
                <Icon src={telegram_icon} alt='' />
                <Icon src={twitter_icon} alt='' />
            </Content>          
        </Wrapper>
    )
}

export default JoinOur
