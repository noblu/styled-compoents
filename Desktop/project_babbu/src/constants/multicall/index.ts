import { ChainId } from 'wowdiex-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.CMCMAINET]: '0x77A2F30e7f1c89465752074633dC545FC684De7b',
  [ChainId.CMCTESTNET]: '0x4961B9EdcD99ee662D6c559d981E9716549e7F93'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
