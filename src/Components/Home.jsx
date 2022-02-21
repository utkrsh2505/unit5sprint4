import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {Auth} from "../ContextApi/AuthContext";
export const Home = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    var {isLogin,handleLogin} = useContext(Auth);
    const history = useHistory();
    const logi =(e)=>{


        e.preventDefault();
        handleLogin(name,password)
        history.push("/Prerequisite")
    }
  return (
    <div>
        
    <form onSubmit={logi}>
        <input type="text" placeholder="Type Username" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/><br/>
        <input type="password" placeholder="Type Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <br/>
        <input type="submit" value="Login"/>
    </form>
    </div>
  )
}
