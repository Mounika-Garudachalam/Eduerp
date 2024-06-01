import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:'idle',
    adminDetails:[],
    tempDetails:[],
    loading:false,
    currentUser:null,
    error:null,
    response:null
};

const adminSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        setCurrentUser(state,action){
            state.currentUser=action.payload;
        },
        authRequest:(state)=>{
            state.status='loading';
        },
        underControl:(state)=>{
            state.status='idle';
            state.response=null;
        },
        stuffAdded:(state,action)=>{
            state.status='added';
            state.response=null;
            state.error=null;
            state.tempDetails=action.payload;
        },
        authFailed:(state,action)=>{
            state.status='failed';
            state.response=action.payload;
        },
        authError:(state,action)=>{
            state.status='error';
            state.response=action.payload;
        }
    },
});

export const {
    setCurrentUser,authRequest,authError,authFailed,stuffAdded,underControl
}=adminSlice.actions;

export const adminReducer=adminSlice.reducer;