import React from 'react';

const Message = () => {
    return(
        <div className="message owner">
           <div className="messageInfo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CbwDcWn1kGCGngSeafTlNJIlZwIbTipg60eo-_yAeA&s" alt="" />
                <span>Just now</span>
           </div>
           <div className="messageContent">
            <p>hello</p>
            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            
           </div>
        </div>
    )
}
export default Message;