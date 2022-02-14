import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

// CONNECTION
export const accountAddressSelector = (state: RootState) => state.connect.accountAddress
export const babbuBalanceSelector = (state: RootState) => state.connect.babbuBalance
export const bnbBalanceSelector = (state: RootState) => state.connect.bnbBalance
export const busdBalanceSelector = (state: RootState) => state.connect.busdBalance
export const nftIdArraySelector = (state: RootState) => state.connect.nftIdArray
export const babbuNftDataArraySelector = (state: RootState) => state.connect.babbuNftDataArray

// NFT MINT
export const nftMintSlotArraySelector = (state: RootState) => state.nftMint

// export const babbuFamilyNftDataArraySelector = createSelector(babbuNftDataArraySelector)