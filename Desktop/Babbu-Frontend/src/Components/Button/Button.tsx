import React, { useState } from 'react';
import styled from 'styled-components'

interface ButtonProps {
  width: number,
 active: boolean,
 img:any
}

const Tab = styled.button<ButtonProps>`
width:${({width})=>width}px;
height: 36px;
margin-left:0;
  
  cursor: pointer;
  opacity: 0.6;
  background: #EBE8E2;
  border-radius: 12px;
  border: 0;
  outline: 0;
  font-family: Sen;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    background: #FFE000;
    opacity: 1;
    font-family: Sen;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

  `}
`;




const Wrapper = styled.div`
width:100%;
text-align:center;
margin: 10px 5px;
height: 44px;

`;


const AppWrapper = styled.div`
background-color:#EBE8E2;
border-radius: 12px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 0px 5px;
height: 44px;
padding: 0 5px;
`;

const Content = styled.div<any>`
max-width:${({ img }) => img}px;
border-radius: 12px;
align-items: center;
display: flex;
height: 44px;
background: rgba(235, 232, 226,0.4);
border-radius: 12px;
`;

// @ts-ignore
const types = ['Babbu Family', 'Friends Card', 'Crystal Stone'];

export function ButtonClick(): JSX.Element {
  const [active, setActive] = useState(types[0]);
  return (
    <Wrapper>
      <Content img={450}>
        {types.map((type, index) => (
          //@ts-ignore
          <Tab key={index} active={active === type} onClick={() => setActive(type)} width={167}>
            {type}
          </Tab>
        ))}
      </Content>
    </Wrapper>
  )
}

const typeAngel = ["Babbu Angel", "Friends Card", "Bounty Card"]

export const ButtonAngel = () => {
  const [active, setActive] = useState(typeAngel[0]);
  return (
    <AppWrapper>
      <Content img={400}>
        {typeAngel.map((type, index) => (
          //@ts-ignore
          <Tab key={index} active={active === type} onClick={() => setActive(type)} width={135}>
            {type}
          </Tab>
        ))}
      </Content>
    </AppWrapper>
  )
}

const typeBuyNft = ["$BABU", "$BNB"] 
export const ButtonBuyNft = () => {
  const [active, setActive] = useState(typeBuyNft[0]);
  return (
    <AppWrapper>
    <Content img={395}>
      {typeBuyNft.map((type, index) => (
        //@ts-ignore
        <Tab key={index} active={active === type} onClick={() => setActive(type)} width={157}>
          {type}
        </Tab>
      ))}
    </Content>
  </AppWrapper>
  )
}