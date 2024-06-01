import axios from 'axios';
import {
    getRequest,getSuccess,getFailed,getError
} from './noticeSlice';

export const getAllNotices=(id)=>async(dispatch)=>{
    dispatch(getRequest());
    try{
        const result=await axios.get('/noticelist/:id');
        if(result.data.message){
            dispatch(getFailed(result.data.message));
        }else{
            dispatch(getSuccess(result.data));
        }
    }catch(error){
        const errorMessage=error.response?.data?.message || error.message;
        dispatch(getError({message:errorMessage}));
    }
}