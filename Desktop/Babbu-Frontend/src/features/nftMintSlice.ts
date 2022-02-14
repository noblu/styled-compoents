import { createSlice } from '@reduxjs/toolkit'

const initialState: any = [0, 0, 0, 0]

export const nftMintSlice = createSlice({
    name: 'nftMint',
    initialState,
    reducers: {
        addNftToSlot: (state, action) => {
            const theOne = state.find((e: any) => e._id == action.payload._id)
            const index1 = state.indexOf(theOne);
            if (index1 == -1) {
                let index2 = state.indexOf(0)
                state[index2] = action.payload
            }
        },
        removeNftFromSlot: (state, action) => {
            state.splice(action.payload, 1)
            state.push(0)
        },
        addHashRateAndSuccessPercentageToNftSlotData: (state, action) => {
            const theOne = state.find((e: any) => e._id == action.payload[0])
            const index = state.indexOf(theOne);
            if (index > -1) {
                state[index].hashRate = action.payload[1];
                state[index].successPercentage = action.payload[2];
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addNftToSlot, removeNftFromSlot, addHashRateAndSuccessPercentageToNftSlotData } = nftMintSlice.actions

export default nftMintSlice.reducer