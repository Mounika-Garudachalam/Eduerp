import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

import Button from './Button';  
import './Form.css';

//Reusable Form component

export default function Form({onSubmit,template,buttonLabel}){
    const {handleSubmit,register,formState:{errors}}=useForm();

    const {fields}=template;

    const renderFields=(fields)=>{
        return fields.map((field,index)=>{
           const {element,type,placeholder,name,registerOptions,errorMessage}=field;
            const Element=element==='input'?'input':'textarea';
            return (
                <div className='entryarea' key={index}>
                <Element
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    element={element}
                    required
                    {...register(name,registerOptions)}    /*register input field(onchange)*/
                    {...errorMessage}
                />
                {/* <label htmlFor={name} className='labelline'>{label}</label> */}
                {errors[name] && <span className='error-message'>{errors[name].message}</span>}
            </div>
            );
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderFields(fields)}
                <br/>
                <Button type="submit">{buttonLabel}</Button>   
            </form>
        </div>
    );
}
