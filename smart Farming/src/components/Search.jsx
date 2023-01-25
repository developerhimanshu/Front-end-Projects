import React from 'react';
const srchStyle = {
    background:"#3E3C61",
    border:"none",
    width:"97%",
    padding:"10px 0px 10px 10px",
    color:"white",
    outline:"none",
}
const Search = () => {
    return(
        <div className="search">
            <form action="">
                <input type="text" placeholder='Find a user' style={srchStyle}/>
            </form>
            <div className="userChat">
                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}
export default Search;