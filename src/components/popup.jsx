import React from 'react'
// import './popup.css'
import Movieapp from './movieapp';
import { useState } from 'react';

export default function Popup(props) {
  return (props.trigger)?(
    <div className='pop'>
      {/* <h1>erer</h1> */}
      <div className='pop-inner'>
        <p>{props.des}</p>
        <button onClick={()=>props.setTrigger(false)} className='close'>Close</button>
        {props.children}
      </div>
    </div>
  ) : "";
}
