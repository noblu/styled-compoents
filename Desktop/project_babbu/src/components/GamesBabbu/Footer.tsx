import React from 'react'

import styled from 'styled-components';

import Facebook from '../../images/facebook.png'
import Discord from '../../images/Discord.png'
import twitte from '../../images/twitte.png'
import Dribbble from '../../images/Dribbble.png'
import groupicon from '../../images/groupicon.png'

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top:14px;
`

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

const Button = styled.button`
font-weight: 700;
text-align: center;
line-height: 22px;
font-size: 18px;
color: #F7F7F7;
background: #0FD545;
border-radius: 42px;
border: transparent;
padding: 8px 13px;



`;

const Img = styled.img`
margin: 0 10px 0 0 ;
`;




function Footer() {
    return (
        <Wrapper>
            <Button>Play now!</Button>
            <Content>
                <Img src={Facebook} alt='' />
                <Img src={Discord} alt=''/>
                <Img src={twitte} alt='' />
                <Img src={Dribbble} alt='' />
                <Img src={groupicon} alt=''/>
            </Content>
        </Wrapper>
    )
}

export default Footer
