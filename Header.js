import { LOGO_URL } from "../utils/constants";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header =()=>{
    const [btnName, setbtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const {LoggedInUser} = useContext(UserContext);
    // console.log(LoggedInUser)

    const cartItems = useSelector((store)=>store.cart.items) 
    console.log(cartItems)

    return (
        <div className='flex justify-between shadow-lg m-2'>
            <div className='logo-container' >
                <img className='w-36' src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className="px-4">Online Status:{onlineStatus?"✅" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about" >About Us</Link></li>
                    <li className="px-4"><Link to="/contact" >Contact</Link></li>
                    <li className="px-4"><Link to="/grocery" >Grocery</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart" >Cart [{cartItems.length} items]</Link></li>
                    <button className="login" 
                    onClick={()=>{
                        setbtnName(btnName === "Login" ? "Logout" :"Login")}}
                    >{btnName}</button>
                    {/* <li className="px-4 font-bold">{LoggedInUser}</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header