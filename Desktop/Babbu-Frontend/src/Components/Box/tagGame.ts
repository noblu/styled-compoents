import BabbuFamily from "./img/Babbu-Family-Nft.png";
import Banker from "./img/icon-babbu-farmer.png";
import BabbuBabker from "./img/nft-babbu-banker.png";
import OpenBox from './img/chest-open.png';
import CloseBox from './img/chest-close.png';

export const configBox: {
    title: string;
    img: string;
    color: string;
    id: number;
}[] = [
           {
        id: 0,
        title: "Babbu Family NFT",
        img: BabbuFamily ,
        color:'#FAE1E0'
      },
      { 
        id:1,  
        title: "Babbu Friends Card",
        img: BabbuFamily,
        color:'#FDF1CC'
      },
      {
        id:2,
        title: "Crystal Stone",
        img: BabbuFamily,
        color:'#F3EDDF'
      },
      {
        id:3,
        title: "Crystal Stone",
        img: BabbuFamily,
        color:'#838281'
      }
     
];

export const configTag: {
    title: string;
    price: string;
    img: string;
    color: string;
}[] = [
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: Banker,
        color:'#FEE9E8'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: BabbuBabker,
        color:'#FDF1CC'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: Banker,
        color:'#F3EDDF'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: BabbuBabker,
        color:'#F0F8DB'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: Banker,
        color:'#F0F8DB'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: BabbuBabker,
        color:'#F0F8DB'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: Banker,
        color:'#F0F8DB'
    },
    { 
        title: "Babbu Banker (#20410)",
        price:'160x',
        img: BabbuBabker,
        color:'#F0F8DB'
    },

]


export const configOpenBox: {
    title: string;
    img: string;
    color: string;
}[]
 = [
    {
        title: 'Babbu Welcome',
        img:OpenBox,
        color:'#FAE1E0'
    },
    {
        title: 'Babbu Explorer',
        img:CloseBox,
        color:'#FDF1CC'
    },
    {
        title: 'Babbu City Build',
        img:CloseBox,
        color:'#F0F8DB'
    },
    {
        title: 'Babbu Explorer',
        img:CloseBox,
        color:'#EAE9FD'
    },
    {
        title: 'Babbu City Build',
        img:CloseBox,
        color:'#EDF8FE'
    },
]





