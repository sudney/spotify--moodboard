import React from 'react';
import './imagecreditgrid.css';

//take in every image used and the src of the image ie Pinterest link. DIsplay each pic as a button and 
//when its hovered enlarge the picture. when the image is clicked on it'll be taken to the Pinterest 
function ImageCreditGrid(props) {
    return (
        <div className="ImageCreditGrid">
            <h2>Image Credits</h2>
            <p>None of these photos are mine. I found most of them on Pinterest. Click on the image to be taken to where it was sourced.</p>
            <div className="cred-flex">
                {props.themeImages.map((curr_img, index) => ( <a href={curr_img.img_src} rel="noopener noreferrer" target="_blank" key={index+30}><img src={curr_img.img} alt={`background subpart ${index}`} width="150" height="150"></img></a>))}
            </div>
        </div>
    )
}

export default ImageCreditGrid
