import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n';




const StyledNav = styled.div`
margin-top: 25px;
font-family: 'Sen', sans-serif;
width: 400px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
`
;





function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <>
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem id="swap-nav-link" to="/auction" as={Link}>
          {TranslateString(1142, 'Auction')}
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/market" as={Link}>
          {TranslateString(262, 'Market')}
        </ButtonMenuItem>
        </ButtonMenu>
      </StyledNav> 
        
   
   </>   
  
  )
}

export default Nav
