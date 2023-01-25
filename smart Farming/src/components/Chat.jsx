import React from 'react';
import Messages from './Messages'
import Input from './Input'
import add from '../Images/add.png'
import more from '../Images/more.png'
import video from '../Images/video.png'
const Chat = () => {
    return(
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={video} alt="" />
                    <img src={add} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>

        </div>
    )
}
export default Chat;