
import { createSlice,PayloadAction } from '@reduxjs/toolkit';

import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitialState={
    numberOfIcecream:number
}

const initialState:InitialState={
    numberOfIcecream:20,
}
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numberOfIcecream--
        },
        restocked:(state,action:PayloadAction<number>)=>{
            state.numberOfIcecream+=action.payload;
        }
    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numberOfIcecream--
    //     }
    // }
    
    //Another Way
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,
            state=>{state.numberOfIcecream--}
        )
    }
})

export default icecreamSlice.reducer;
export const {ordered,restocked}=icecreamSlice.actions;