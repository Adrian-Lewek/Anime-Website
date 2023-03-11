import { NavLink } from "react-router-dom";
export default function Errorpage(){
  return(
    <div className="ErrorContainer">
      <div className="leftSide">
        <h1>404</h1>
        <p>Sorry, this page does not exist.</p>
        <p>You are lost!</p>
        <NavLink to="/">Go to home</NavLink>
      </div>
    </div>
  )
}