import React from "react";
import { Icon } from '@iconify/react';
import { useState , useCallback } from "react";
import { DropdownButtonWrapper,DropMenu } from "../Collage/style.js";
import Popup from '../Popup/Popup.js';
import ImageCreditGrid from './ImageCreditGrid/ImageCreditGrid.js';
import { AboutContent } from "./AboutContent/AboutContent.js";

export function DropdownButton(props) {
  const [isClicked,setIsClicked] = useState([]);
  
  function handleClick(){
    isClicked === true? setIsClicked(false) :  setIsClicked(true); 
  }
  
  return (
    <div className="menu">
        <DropdownButtonWrapper onClick={handleClick}>
            Account
            {isClicked === true ? <Icon icon="ion:caret-up" /> : <Icon icon="ion:caret-down" />}
        </DropdownButtonWrapper>
        {isClicked === true && <DropDownMenu isAuth={props.isAuth} themeImages={props.themeImages}></DropDownMenu>}
    </div>
  );
}

export function DropDownMenu(props) {
  const [creditsClicked,setCreditsClicked] = useState('none');
  const [trig, setTrig] = useState(true);

  const handlecreditsClicked = useCallback((opt) =>{
    if(creditsClicked === 'none'){
      setTrig(true);
      setCreditsClicked(opt); 
    } 
    else{
      setTrig(false);
      setCreditsClicked('none');       
    }
  },[creditsClicked]);

  return (  
    <DropMenu>
      <ul>
        <li>
          <button onClick={() => handlecreditsClicked('credit')}>Image Credits</button>       
        </li>
        <li>
          <button onClick={() => handlecreditsClicked('about')}>About</button>       
        </li>
        <li>
          <button onClick={() => props.isAuth(false)}>Log out</button>
        </li>
      </ul>
      <Popup trigger={trig && (creditsClicked === 'credit' || creditsClicked === 'about')}  content={creditsClicked === 'credit' ?<ImageCreditGrid themeImages={props.themeImages}/> : <AboutContent/> } isClicked={setTrig}></Popup> 
    </DropMenu>
  );
}


