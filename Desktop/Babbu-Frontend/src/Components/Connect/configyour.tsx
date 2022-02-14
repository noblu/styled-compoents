import Wallet from './icons/iconbook.svg'
import MyNFT from './icons/money-2.svg'
import Profile from './icons/user.svg'



import {ConfigYour, ConnectorNames, ConfigMoney } from "./types";

 const yourAddress: ConfigYour[] = [
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

export default yourAddress;



export const connectorLocalStorageKey = "connectorId";