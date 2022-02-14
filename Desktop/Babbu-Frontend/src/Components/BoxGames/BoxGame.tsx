/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Image, H2 } from "../Images/Image";
import { Button } from "../Images/Image";
import './boxgame.css';
import { ethers } from "ethers";
import Gamebabbu from './img/icon-GameBabbu.png'
import LogoMoney from './img/logoMoney.svg'
import { ButtonClick } from "../Button/Button";
import { configTag } from "../Box/tagGame";
import { configBox } from "../Box/tagGame";
import { accountAddressSelector, babbuBalanceSelector } from '../../features/selectors';
import { getBabbuBalance } from '../../features/connectionSlice'
import { useDispatch, useSelector } from 'react-redux';


const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
height: 100%;
@media screen and (max-width: 768px) {
  width: 450px;
  justify-content:center;
  }
`;

const TitleSpan = styled.span`
display:none;
margin-bottom: 20px;
@media screen and (max-width: 768px){
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 16px;
color: #000000;
display: block;  
}
`;

const StrongSpan = styled.strong`
font-family: Sen;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 22px;
color: #0FD545;
`;

const Buybox = styled.div`
width: 100%;
width:831px;
display: flex;
background: #F7F7F7;
border-radius: 16px;
min-height:460px;
padding:10px 20px 0 0;
@media screen and (max-width: 768px) {
  width: 400px;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  }
`;

const BoxImg = styled.div`
flex: 1;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
grid-gap: 1.2rem;
width: 100%;
height: 100%;
margin-left: 5px;
@media screen and (max-width: 768px) {
  width:400px;
  grid-gap: 2rem;
  margin-bottom: 25px;
}
`;

const AppWrapper = styled.div`
height: 210px;
width: 180px;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
border-radius: 16px;
background-color:${({ color }) => color};
object-fit: cover;
margin: 0px 5px 0px 5px;
cursor: pointer;
&: hover {
  border: 2px solid rgba(128,128,128, 0.5);
  opacity:0.9;
`;

const Fileter = styled.div`
flex: 1;
margin-left: 25px;
margin-top: -8px;
`

const ButtonEnd = styled.button`
text-align: center;
background: #FFE000;
color:#47131A;
width: 100%;
height:53px;
border-radius: 12px;
border: none;
outline: none;
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
margin-top: 10px;
cursor:pointer;
&: hover {
    opacity: 0.7;
  }
`
const Context = styled.div`
`
const Endtime = styled.div`
display: flex;
align-items: center;
margin: 20px 0;
`;

const Span = styled.span`
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 16px;
text-align: center;
margin-top: 20px;
`;

const NextPages = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
margin: 20px 0;
@media screen and (max-width: 768px) {
  margin-top: 110px;
}
`
const initBoxType = [0, 0, 0]

function BoxGame() {


const [price, setprice] = useState(initBoxType)
const [value, setValue] = useState(0)
const [product, setProduct] = useState(configBox);

const [allowance, setAllowance] = useState()
const accountAddress = useSelector(accountAddressSelector)
const babbuBalance = useSelector(babbuBalanceSelector)

useEffect(() => {
  getAmountBabu().then(console.log);
},[accountAddress]);

  const dispatch = useDispatch()
  

  const getBalance = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_TOKEN_ADDRESS as string, import.meta.env.VITE_BABBU_TOKEN_ABI as string, signer);
    let balance = await contract.balanceOf(accounts[0]);
    const BalanceOf = ethers.utils.formatUnits(balance, 18)
    dispatch(getBabbuBalance(BalanceOf))
    // console.log(BalanceOf);
  }

  useEffect(() => {
    getBalance()
  }, [])




  useEffect(() => {
    getAmountBabu().then(console.log);
  }, [accountAddress]);



  const getBlindBox = async (type: number) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_NFT as string, import.meta.env.VITE_BABBU_NFT_ABI as string, signer);
    await contract.blindBoxPrice(type).then((res: any) => {
      const boxPrice = Number(ethers.utils.formatUnits(res._hex, 18))
      console.log(boxPrice)
      let newArray = [...price]
      newArray[type] = boxPrice
      setprice(newArray)
    })
  }

  useEffect(() => {
    //@ts-ignore
    getBlindBox()
  }, [price])

  console.log('Price:' + price[value]);
  const getAmountBabu = async () => {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    //@ts-ignore
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_TOKEN_ADDRESS, import.meta.env.VITE_BABBU_TOKEN_ABI, signer);
    const balance = await contract.balanceOf(accounts[0]);
    console.log("balance:" + balance);
    return balance;
  }



  const getApprove = useCallback(async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      //@ts-ignore
      let contract = new ethers.Contract(import.meta.env.VITE_BABBU_TOKEN_ADDRESS, import.meta.env.VITE_BABBU_TOKEN_ABI, signer)
      const amountBabbu = await getAmountBabu();
      contract.approve(
        import.meta.env.VITE_BABBU_NFT,
        amountBabbu
      )
        .then(console.log)

    } catch (error) {
      console.log('Error');
      console.log(error);
    }
  }, [])

  const getAllowance = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      //@ts-ignore
      let contract = new ethers.Contract(import.meta.env.VITE_BABBU_TOKEN_ADDRESS, import.meta.env.VITE_BABBU_TOKEN_ABI, signer)
      let allowance = await contract.allowance(accounts[0], import.meta.env.VITE_BABBU_NFT)
      let AllowanBalanceOf = ethers.utils.formatUnits(allowance, 18)
      console.log("AllowanBalanceOf :" + AllowanBalanceOf);
      //@ts-ignore
      setAllowance(AllowanBalanceOf);
    } catch (error) {
      console.log('error');
    }
  }
useEffect(()=>{getAllowance()},[])

  const buyBox = useCallback(async (event: any) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_NFT as string, import.meta.env.VITE_BABBU_NFT_ABI as string, signer);
    // if( getBlindBox(value) == allowance) {
    // contract.buyBlindBox(value,1).then(console.log); 
    // // console.log("ok");
    // //@ts-ignore
    // } else if (value === 0 &&  allowance  < getBlindBox(value)) {
    //   getApprove();
    //   contract.buyBlindBox(value,1).then(console.log);
    //   return;
    //   //@ts-ignore 
    // } else if (value === 1 &&  allowance < getBlindBox(value)){
    //   contract.buyBlindBox(value,1).then(console.log); 
    //   return;
    // } else {
    //   contract.buyBlindBox(value,1).then(console.log); 
    //     return;
    // } 
    //@ts-ignore
    if (allowance >= price[value]) {
      console.log('ko can approve');
    } else {
      getApprove();
    }
    contract.buyBlindBox(value, 1).then(console.log);
    
  }, [])


  return (
    <>
      <Wrapper >
        <Image className='logo-family' src={Gamebabbu} />
        <TitleSpan>Use BNB/BABUto draw Babbu NFT.<StrongSpan>About Babbu Family</StrongSpan></TitleSpan>
        <form onSubmit={buyBox}>
          <Buybox>
            <BoxImg>
              {
                product.map((item, id) => (
                  //@ts-ignore
                  <AppWrapper key={item.id} color={item.color} >
                    <Image style={{ width: '135px', height: '123px', marginBottom: '10px' }} src={item.img} onClick={() => {
                      setValue(item.id);
                      // console.log(item.id)

                    }} />
                    <Span >{item.title}</Span>
                  </AppWrapper>
                )
                )}
            </BoxImg>
            <Fileter>
              <H2>BABBU NFT BOX</H2>
              <span>Remaining Amount: 0</span>
              <Endtime>
                <Button color='#2D1B0E' >End time</Button>
                <p className="title-time">UTC+7 Dec 30, 19:00</p>
              </Endtime>
              <div>
                <Context>
                  <p className="price">Price:</p>
                  <div className='iconBNB'>
                    <Image src={LogoMoney} />
                    <span className="title-money">4,395</span>
                    <span> ≈ $102 </span>
                  </div>
                </Context>
                <ButtonEnd type='submit'>Buy now</ButtonEnd>
                <div className="blind-box">
                  <p className="blind-rules">Blind Box Rules</p>
                  <span className="blink-title">1. You can buy BABBU BOX NFT with BNB, and get a BOX randomly after purchase; </span>
                  <span className="blink-title">2. BABBU NFT can be staked for mining in the Mining Pool, or traded on the NFT trading market.</span>
                </div>
              </div>
            </Fileter>
          </Buybox>
        </form>

        <NextPages>
          <ButtonClick />
        </NextPages>
        <BoxImg>
          {
            configTag.map((item, index) => (
              <AppWrapper key={index} color={item.color} >
                <Image style={{ width: '106px', height: '112px' }} src={item.img} />
                <span>{item.title}</span>
              </AppWrapper>
            )
            )}
        </BoxImg>
      </Wrapper>
    </>
  )

}
export default BoxGame
