import axios from 'axios';
import {authRequest,authFailed,authError,stuffAdded} from './adminSlice';

export const addStuff=(fields,address)=>async(dispatch)=>{
    dispatch(authRequest());
    try {
        const result=await axios.post(`${address}create`,fields,{
            headers:{'Content-Type':'application/json'},
        });
        if(result.data.message){
            dispatch(authFailed(result.data.message));
        }else{
            dispatch(stuffAdded(result.data));
        }
    }catch(error){
        dispatch(authError(error));
    }
};