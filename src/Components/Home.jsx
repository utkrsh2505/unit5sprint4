import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import {Auth} from "../ContextApi/AuthContext";
export const Home = () => {
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    let {isLogin} = useContext(Auth);
  return (
    <div>
        {isLogin}
    <form>
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
