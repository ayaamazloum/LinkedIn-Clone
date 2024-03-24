import "./style.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Logo from "../../assets/images/logo.png";

import { useState } from "react";

const Authentication = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (login) => { setIsLogin(login); };

    return (
        <div className="flex center page auth-page">
            <img className="logo" src={Logo} alt="LinkedIn" /> 
            {isLogin? (<Login handleLogin={handleLogin} />) : (<Signup handleLogin={handleLogin} />)}
        </div>
    );

};

export default Authentication;