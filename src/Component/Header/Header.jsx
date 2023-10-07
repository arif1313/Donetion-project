import { NavLink } from "react-router-dom";
import "./header.css"



const Header = () => {
    return (
        <div className="mx-auto container">
            <div className="flex  justify-between items-center bg-base-100  ">
                <div className="">
                   <img className="w-48" src="./images/Logo.png" alt="" />
                 </div>
                <div className="flex gap-7 p-5">
                  
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/donation">Donation</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                       
                 
                </div>
            </div>
        </div>
    );
};

export default Header;