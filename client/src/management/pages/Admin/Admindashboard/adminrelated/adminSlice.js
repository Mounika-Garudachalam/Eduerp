import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoading:false,
    currentAdmin:null,
    error:null,
}
export const adminSlice=createSlice({
    name:'admin',
    initialState:null,
    reducers:{
        loginSuccess:(state,action)=>{
            state.currentAdmin=action.payload;
            state.isLoading=false;
        },
        loginfailure:(state,action)=>{
            state.error=action.payload;
        },
        registerSuccess:(state,action)=>{
            state.currentAdmin=action.payload;
            state.isLoading=false;
        },
        registerfailure:(state,action)=>{
            state.error=action.payload;
        },
        logoutSuccess:(state)=>{
            state.currentAdmin=null;
        }
    }
})

export const {
    loginfailure,
    loginSuccess,registerfailure,
    registerSuccess,logoutSuccess
}=adminSlice.actions;

export default adminSlice.reducer;