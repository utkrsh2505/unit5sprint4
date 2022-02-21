import React from 'react'
import { useContext } from 'react'
import {Auth} from "../ContextApi/AuthContext"
import {Link} from "react-router-dom";
export const Prerequisite = () => {
   let {isLogin} = useContext(Auth);
  return (
      <div>
<form>
<input type="checkbox"/>
   <lable>Can You Attend 90% of the classes</lable>
   <br/><br/>
<input type="checkbox"/>
   <lable>Do You Have Laptop</lable>
</form>
<Link to="/Info"><button>Continue</button></Link>

      </div>
   
  )
}
