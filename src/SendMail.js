import React from 'react';
import './SendMail.css';

import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import {useForm}from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

function SendMail() {

    const {register, handleSubmit, watch, errors}  = useForm();
    const dispatch= useDispatch();
    const onSubmit=(data)=>{
        console.log(data);
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3> New Message</h3>
                <CloseIcon className="sendMail__close" onClick={()=> dispatch(closeSendMessage()) } />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  name="to" placeholder="To:" type="text" ref={register({required:true})} />
                {errors.to&& <p> To is required </p> }
                 <input name="subject"  placeholder="Subject" type="text"  ref={register({required:true})} />
                  <input  name="message" className="sendMail__message" placeholder="Message ..." type="text"  ref={register({required:true})} />

                  <div className="sendMail__options">
                      <Button className="sendMail__send" >Send</Button>
                  </div>
            </form>
        </div>
    )
}

export default SendMail;
