import React from 'react';
import styled from 'styled-components';
import IconHouse from '../images/IconHouse.png';
import Shopping from '../images/Shopping.png';
import NFT from '../images/NFT.png';
import Farms from '../images/Farms.png';
import Market from '../images/Market.png';
import Games from '../images/Games.png';
import ImgIcon from '../images/ImgIcon.png';
import Babbu from '../images/Babbu.png';
import Guide from '../images/Guide.png';
import Community from '../images/Community.png';
import Help from '../images/Help.png';
import AboutBABBU from '../images/AboutBABBU.png';
import AppDownload from '../images/AppDownload.png';




const Icon = styled.img`
hight:19px;
width:19px;
margin: 0 5px;
object-fit: cover;
`;
  
export const SidebarData = [
    {
    label: 'Home',
    icon: <Icon src={IconHouse}/>,
    href: 'https:/google.com.vn',
  },
  {
    label: 'Buy $BABBU',
    icon: <Icon src={Shopping}/>,
    href: 'https:/google.com.vn',
  },
  {
    label: 'NFT Mining',
    icon: <Icon src={NFT}/>,
    initialOpenState: false,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Babbu Family NFT',
        href: '/migrate',
      },
      {
        label: 'Babbu Friends Card',
        href: 'https:/google.com.vn',
      },
      {
        label: 'Crystal Stone',
        href: 'https:/google.com.vn',
      },
      {
        label: 'Bounty',
        href: '/pool',
      },
    ],
  },
  
  {
    label: 'Farms',
    icon: <Icon src={Farms}/>,
    href: 'https:/google.com.vn',
  },
  {
    label: 'NFT Market',
    icon:<Icon src={Market}/>,
    href: 'https:/google.com.vn',
  },
  {
    label: 'Gamebase',
    icon: <Icon src={Games}/>,
    href: 'https:/google.com.vn',
  },
 
  {
    label: 'Babbu NFT',
    icon: <Icon src={ImgIcon}/>,
    items: [
      {
        label: 'Babbu NFT Box',
        href: 'https:/google.com.vn',
      },
      {
        label: 'NFT Mint',
        href: 'https://pancakeswap.finance/profile/tasks',
      }
    ]
  },
  {
    label: 'Bounty',
    icon: <Icon src={Babbu}/>,
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'Guide',
    icon: <Icon src={Guide}/>,
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'Community',
    icon: <Icon src={Community}/>,
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'Help Center',
    icon: <Icon src={Help}/>,
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'About BABBU',
    icon: <Icon src={AboutBABBU}/>,
    href: 'https://pancakeswap.finance/ifo',
  },
  {
    label: 'App Download',
    icon: <Icon src={AppDownload}/>,
    href: 'https://pancakeswap.finance/ifo',
  },
]


