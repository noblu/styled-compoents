import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Heading, IconButton, Text, Flex, useModal, TuneIcon, HistoryIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'
import IconDown from '../../images/iconDown.png'
import Search from '../../images/search.png';

interface PageHeaderProps {
  title: ReactNode
  description?: ReactNode
  children?: ReactNode
}

const StyledPageHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 24px;
  width: 400px;
`


const Wrapper = styled.div`
background: #FFFFFF;
border: 1px solid #CAB6A4;
box-sizing: border-box;
border-radius: 12px;
margin-right: 14px;
width:100px;
display:  flex;
align-items: center;
justify-content: space-between;
text-align: center;
padding 6px 10px;

`;

const Icon = styled.img`
`;

const Content = styled.div`
display: flex;
align-items: center;
justify-content: between;
width: 400px;
`;

const Context = styled.div`
margin-top: 14px;
background-color: #EBE8E2;
display: flex;
border-radius: 12px;
align-items:center;
justify-content: space-between;
width: 270px;
margin-right:50px;
`;
const Input = styled.input`
border: none;
outline: none;
background-color: transparent;
padding: 10px 0 10px 15px;

`;
const Button = styled.button`
border-radius: 12px;
padding: 9px 5px;
margin-top: 14px;
border:none;
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
letter-spacing: -0.015em;
`;

const AppWrapper = styled.div`
width: 428px;
padding 0 14px;
`;

const PageHeader = ({ title, description, children }: PageHeaderProps) => {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)

  return (
    <AppWrapper>
    <StyledPageHeader>
      <Flex alignItems="center" justifyContent='flex-start'>
        <Wrapper>
          <Content>All NFT</Content>
          <Icon src={IconDown} alt='' onClick={onPresentSettings}/>
        </Wrapper>
        <Wrapper>
          <Content>LatestBid</Content>
          <Icon src={IconDown} alt=''  onClick={onPresentRecentTransactions}/>
          </Wrapper>
      </Flex>
      </StyledPageHeader>
      <Content>
        <Context>
          <Input placeholder='Please enter key...'/>
          <Icon src={Search} alt='' />
        </Context>
        <Button  onClick={onPresentSettings} >Hotstory</Button>
      </Content>
    </AppWrapper>
  )
}

export default PageHeader
