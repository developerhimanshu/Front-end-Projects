import React from 'react';
import galary from '../Images/gallary.png'
import attach from '../Images/attach.png'
const Input = () => {
    return(
        <div className="input">
            <input type="text" placeholder='Type something' />
            <div className="send">
                <img src={attach} alt="" className="img-send"/>
                <input type="file" id='attach' style={{display:"none"}} />
                <label htmlFor="attach">
                    <img src={galary} alt="" className='img-send'/>
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}
export default Input;