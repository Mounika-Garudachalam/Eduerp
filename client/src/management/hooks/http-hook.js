import { useState, useCallback,useRef, useEffect } from "react";

export const useHttpClient=()=>{

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState();
    //extra feature-if while a functionality is loading i want to abort it
    const activeHttpRequests=useRef([]);

    const sendRequest=useCallback(async(url,method='GET',body=null,headers={})=>{
        setIsLoading(true);

        //functonality built into modern browsers-AbortController
        const httpAbortCtrl=new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);

        try{
        const response=await fetch(url,{
            method,
            body,
            headers,
            signal:httpAbortCtrl.signal
        });
        const responseData=await response.json();
        //stop abortCtrl
        activeHttpRequests.current=activeHttpRequests.current.filter(
            reqCtrl=>reqCtrl !== httpAbortCtrl
        );
                if(!response.ok){
                    throw new Error(responseData.message);    //400 or 500 error
                } 
                setIsLoading(false);
                return responseData;
        }catch(err){
            setError(err.message);
            setIsLoading(false);
            throw err;
        }
        
    },[]);

    const clearError=()=>{
        setError(null);
    };

    //useEffect() cannot just be used to run some logic whenever a component renders
    //but also to run some cleanup logic when a component unmounts
    //runs only whenever the component mounts
    useEffect(()=>{
        //cleanup function
        return ()=>{
            activeHttpRequests.current.forEach(abortCtrl=>abortCtrl.abort());
        };
    },[]);

    return {isLoading,error,sendRequest,clearError};
};