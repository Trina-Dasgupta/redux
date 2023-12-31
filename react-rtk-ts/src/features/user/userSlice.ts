import { createSlice,createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
 
type Users={
    id:number,
    name:string
}
type InitialState={
    loading:boolean
    users:Users[]
    error:string
}
const initialState:InitialState={
    loading:false,
    users:[],
    error:''
}

//Generated pending,fullfilled and rejected action types
export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
   return axios.get('https://jsonplaceholder.typicode.com/users').then(response=>response.data)
})
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(fetchUsers.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action:PayloadAction<Users[]>)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message ||'Something went Wrong'
        })
    }

});
export default userSlice.reducer;
