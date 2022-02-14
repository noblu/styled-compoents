import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../Images/Image';
import { ethers } from 'ethers';
import './topbar.module.css';
import Web3Modal from "web3modal";
import logo from "./img/logo.png";
import iconLogout from "./img/icon-logout.svg";
import iconAppDownload from "./img/icon-app-download.svg";
import iconDollar from "./img/logoMoney.svg";
import iconFlagUs from "./img/icon-flag-us.svg";
import { useDispatch, useSelector } from 'react-redux';
import { pushNftToArray, addHashRateToNftData, getAccountAddress, getBabbuBalance, pushToNftIdArray } from '../../features/connectionSlice';
import { accountAddressSelector, babbuBalanceSelector } from '../../features/selectors';
import Modal from '../Connect/Modal';
import useModal from '../Connect/useModal';
import AddressConnect from '../Connect/AddressConnect';
import { RootState } from '../../app/store';

const Button = styled.button`
background-color: #FFE000;
font-family: Sen;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;
color: #47131A;
margin-right: 20px;
border-radius: 12px;
`;

function Topbar() {
  
  const dispatch = useDispatch()
  const { isShowing, toggle } = useModal();
  const [provider, setprovider] = useState<ethers.providers.Web3Provider>()
  const web3Modal = new Web3Modal()
  const accountAddress = useSelector(accountAddressSelector)
  const babbuBalance = useSelector(babbuBalanceSelector)
  const nftIdArray = useSelector((state: RootState) => state.connect.nftIdArray)

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', (chainId: any) => {
        if (chainId === '0x61') {
          isMetaMaskConnected()
        } else {
          dispatchAccountAddress('')
        }
      })
    }
  }, [])

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', async (accounts: any) => {
        if (accounts) {
          dispatchAccountAddress(accounts[0])
        }
      })
    }
  }, [])

  // @ts-ignore
  useEffect(async () => {
    if (window.ethereum) {
      try {
        // check if the chain to connect to is installed
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x61' }], // chainId must be in hexadecimal numbers
        });
      } catch (error) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        // @ts-ignore
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x61',
                  rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
                },
              ],
            });
          } catch (addError) {
            console.error(addError);
          }
        }
        console.error(error);
      }
    } else {
      // if no window.ethereum then MetaMask is not installed
      alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }
  })

  useEffect(() => {
    isMetaMaskConnected();
  }, []);

  useEffect(() => {
    getNftIds()
   
  }, [accountAddress])

  // async function connect() {
  //   await web3Modal.connect()
  //   await isMetaMaskConnected();
  // }

  const isMetaMaskConnected = async () => {
    let newProvider = new ethers.providers.Web3Provider(window.ethereum);
    setprovider(newProvider)
    let signer = newProvider.getSigner();
    dispatchAccountAddress(await signer.getAddress())
  }

  const dispatchAccountAddress = (accountAddress: string) => {
    dispatch(getAccountAddress(accountAddress))
  }

  async function getNftIds() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_NFT as string, import.meta.env.VITE_BABBU_NFT_ABI as string, signer);
    let array: any[] = []
    if (accountAddress) {
      await contract.list(accountAddress)
        .then((res: any) => {
          res.forEach(async (e: any) => {
            const id = Number(e)
            dispatch(pushToNftIdArray(id))
            array.push(id)
            const hashRate = Number(await contract.getHashrate(id))
            const arr = [id, hashRate]
            dispatch(addHashRateToNftData(arr))
          })
        })
        .catch((err: any) => console.log(err))
      getNftData(array)
    }
  }

  const getNftData = async (nftIdArray: any) => {
    const idArrayToStringed = '[' + nftIdArray.toString() + ']'
    await fetch(`https://testnet-api.babbu.io/nft?ids=${idArrayToStringed}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.data, 'data.data');
        data.data.forEach((e: any) => {
          dispatch(pushNftToArray(e))
        })
        // dispatch(pushNftToArray(data.data))
      })
      .catch(err => {
        console.log(err)
      })
  }

  const  getBalance = async ()=> {
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(import.meta.env.VITE_BABBU_TOKEN_ADDRESS as string, import.meta.env.VITE_BABBU_TOKEN_ABI as string, signer);
    let balance = await contract.balanceOf(accounts[0]);
    const BalanceOf = ethers.utils.formatUnits(balance, 18)
    dispatch(getBabbuBalance(BalanceOf))
    // console.log(BalanceOf);
  }

useEffect(()=>{
  getBalance()
},[accountAddress])


  return (
    <header>
      <div className="row align-items-center g-0">
        <div className="col-auto d-flex">
          <span className="d-md-none menuToggle me-2">
            <img src={iconLogout} width={20} />
          </span>
          <Link to="/" className="logo">
            <Image src={logo} alt="Babbu Logo" />
            <span className='ml-1'>1.0</span>
          </Link>
        </div>
        <div className="col d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
          <ul className="list-unstyled headerMenu me-auto d-md-flex align-items-center mb-0 d-none">
            <li>
              <Link to="#">
                <Image src={iconAppDownload} alt="Babbu App download" /> App download
              </Link>
            </li>
            <li>
              <Link to="#">
                <Image src={iconDollar} alt="iconDollar" />
              </Link>
              <span >{babbuBalance}</span>
            </li>
          </ul>
          <div className="ms-auto d-flex">
            <Button onClick={toggle} className="btn bg-yellow connectWallet">
              {accountAddress.length > 0 ? `${accountAddress.slice(0, 4)}...${accountAddress.slice(accountAddress.length - 4, accountAddress.length)}` : "Connect Wallet"}
            </Button>
            {accountAddress ? (<AddressConnect isShowing={isShowing} hide={toggle} accountAddress={accountAddress} babbuBalance={babbuBalance} />) : <Modal isShowing={isShowing} hide={toggle} />}
            <div className="dropdown language">
              <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src={iconFlagUs} alt="Flag Us" />
              </span>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar