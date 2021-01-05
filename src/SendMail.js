import React from 'react';
import './SendMail.css';

import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import {useForm}from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import {db} from './firebase';
import firebase from 'firebase';

function SendMail() {

    const {register, handleSubmit, watch, errors}  = useForm();
    const dispatch= useDispatch();

    const onSubmit=(formData)=>{
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject:formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3> New Message</h3>
                <CloseIcon className="sendMail__close" onClick={()=> dispatch(closeSendMessage()) } />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  name="to" placeholder="To:" type="email" ref={register({required:true})} />
                {errors.to&& <p> To is required </p> }
                 <input name="subject"  placeholder="Subject" type="text"  ref={register({required:true})} />
                 {errors.subject&& <p> subject is required </p> }
                  <input  name="message" className="sendMail__message" placeholder="Message ..." type="text"  ref={register({required:true})} />
                    {errors.message&& <p> message is required </p> }
                  <div className="sendMail__options">
                      <button className="sendMail__send" >Send</button>
                  </div>
            </form>
        </div>
    )
}

export default SendMail;
