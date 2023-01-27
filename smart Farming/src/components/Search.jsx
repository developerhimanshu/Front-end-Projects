import React from 'react';
import { useState } from 'react';
import {db} from '../utils/firebase'
import { collection, query, where, getDocs } from "firebase/firestore";

const citiesRef = collection(db, "cities");
const srchStyle = {
    background:"#3E3C61",
    border:"none",
    width:"97%",
    padding:"10px 0px 10px 10px",
    color:"white",
    outline:"none",
}
const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    
    const handleSearch = async()=>{
        const q = query(
            collection(db, "users"), where("displayName", "==", username)
            );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
            
    }

    const handlekey = (e)=>{
        e.code === 'Enter' && handleSearch();
    }
    return(
        <div className="search">
            <form action="">
                <input type="text" placeholder='Find a user' style={srchStyle} onKeyDown={handlekey} onChange={e=>setUsername(e.target.value)}/>
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