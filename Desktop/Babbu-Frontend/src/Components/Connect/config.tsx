// import Metamask from "./icons/Metamask";
// import MathWallet from "./icons/MathWallet";
// import TokenPocket from "./icons/TokenPocket";
// import TrustWallet from "./icons/TrustWallet";
// import WalletConnect from "./icons/WalletConnect";
// import BinanceChain from "./icons/BinanceChain";
// import SafePalWallet from "./icons/SafePalWallet";
import {ConfigYour, Config, ConnectorNames } from "./types";
import Metamask from './icons/Metamask_logo.svg'
import TrustWallet from './icons/TrustWallet_logo.svg'
import WalletConnect from './icons/WalletConnect_logo.svg'
import TokenPocket from './icons/TokenPocket_logo.svg'
import BinanceChain from './icons/Binance-Chain-Wallet_logo.svg'
import SafePalWallet from './icons/SafePal-Wallet_logo.svg'
import Coin98Wallet from './icons/conin-98.svg'
import Wallet from './icons/iconbook.svg'
import MyNFT from './icons/money-2.svg'
import Profile from './icons/user.svg'


export const yourAddress: ConfigYour[] = [
  {
    name: "Wallet",
    img: Wallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    name: "My NFT",
    img: MyNFT,
    connectorId: ConnectorNames.Injected,
  },
  {
    name: "Profile",
    img: Profile,
    connectorId: ConnectorNames.Injected,
  }
]




const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coin98Wallet",
    icon: Coin98Wallet,
    connectorId: ConnectorNames.Injected,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
