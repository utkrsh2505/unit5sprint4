import React from 'react'
import { useContext } from 'react'
import {Auth} from "../ContextApi/AuthContext"
export const Prerequisite = () => {
   let {isLogin} = useContext(Auth);
  return (
    {isLogin}
  )
}
