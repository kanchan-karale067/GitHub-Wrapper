import React from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const App = () => {

  const [username,setUsername]=useState("");
  const [userInfo, setUserInfo]=useState();

  
const handleformSubmit= async(e)=>{
  e.preventDefault();  //your page load with every single time so we prevent by using
  
  const response=await axios.get(" https://api.github.com/users/"+username);
 
  setUserInfo(response.data);

}

  return (
    <div>
      <div className="container">
        <h1 className="heading">GitHub Wrapper</h1>
        <form className="formCard" onSubmit={handleformSubmit}>
          <input type="text" placeholder="Enter GitHub username" onChange={e=>setUsername(e.target.value)} />
          <button>Search</button>
        </form>

        {userInfo && (<div className="userDetailCard">
          <div className="userDetailBody">
            <p className="name">{userInfo.name}</p>
            <em className="username">{userInfo.login}</em>
             <div className="follow">
              <p>{userInfo.followers}</p>
              <p>{userInfo.following}</p>
             </div>
             <div className="prof">
              <p>{userInfo.company}</p>
              <p>{userInfo.bio}</p>
             </div>
          </div>
          <div className="userImage">
            <img src={userInfo.avatar_url} alt="" />
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default App