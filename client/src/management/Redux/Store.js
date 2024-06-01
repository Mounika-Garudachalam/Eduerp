
import {configureStore} from '@reduxjs/toolkit';
// import adminReducer from './authSlice';
import { noticeReducer } from './noticerelated/noticeSlice';
import { adminReducer } from './adminrelated/adminSlice';

const store=configureStore({
    reducer:{
        admin:adminReducer,
        notice:noticeReducer,
        
    }
})

export default store;
