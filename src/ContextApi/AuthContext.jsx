import React from "react";
import { createContext,useState } from "react";
export const Auth = createContext();
const AuthContext = ({children})=>{
    const [isLogin,setIsLogin] = useState(false);
    const handleLogin = ()=>{
        setIsLogin(true);

    }
    return(
        <Auth.Provider value={{isLogin}}>{children}</Auth.Provider>
    )
   


}
export {AuthContext};