import "./style.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Logo from "../../assets/images/logo.png";

import { useState } from "react";

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex column center page auth-page">
            <img className="logo" src={Logo} alt="LinkedIn" /> 
            {isLogin ? (<Login />) : (<Signup />)}
            <p className="mt-50">New to LinkedIn? <span className="primary-text pointer">Join now</span></p>
        </div>
    );
};

export default Authentication;