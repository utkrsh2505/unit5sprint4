import React from "react";
import { createContext,useState } from "react";
export const Auth = createContext();
const AuthContext = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    const handleLogin = (name,password)=>{
        if( name === "admin" && password=== "admin"){
            setIsLogin(true);

        }
        
       
    }
    return(
        <Auth.Provider value={{isLogin,handleLogin}}>{children}</Auth.Provider>
    )
   


}
export {AuthContext};