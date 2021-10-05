import React from 'react'
import './popup.css';
import {Button} from '../Button/Button.jsx';
import {CloseButton} from './CloseButton'
import {useState, useEffect} from 'react';


function Popup(props) {
    const [trigger,setTrigger] = useState([]);
    useEffect(() => {
        setTrigger(props.trigger);
    }, [props])  
    const handleChange = (event) =>{
        setTrigger(false);
        if(props.isClicked){
            props.isClicked(false)
        }
      }

    return (trigger) ? (
        
        <div className="popup">         
            <div className="popup-inner">
            <CloseButton onClick={handleChange} value={'none'}></CloseButton>             
                {props.content}
                <Button className="close-btn" onClick={handleChange } value={'none'}>Close</Button>
                <footer id="smaller-font">Made by Sydney. Questions/Concerns email me at vcssydneye5 at gmail</footer>
            </div>       
        </div>
    ) : "";
}

export default Popup
