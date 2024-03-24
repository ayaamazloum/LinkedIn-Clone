import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const [error, setError] = useState("");

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    const login = () => {
        if (!error == "")
            return;

        const formData = new FormData();
        formData.append('email', credentials.email);
        formData.append('password', credentials.password);
        
        axios.post("http://127.0.0.1/LinkedIn-Clone/Backend/login.php", formData)
            .then((response) => {
                localStorage.setItem('user_id', parseInt(response.data.user_id));
                localStorage.setItem('role', response.data.role);
                localStorage.setItem('first_name', response.data.first_name);
                localStorage.setItem('last_name', response.data.last_name);
                navigate('/home');
            }).catch(function (error) {
                console.error('Error fetching data:', error);
              });
    }

    useEffect(() => {
        console.log(error);
        if (!emailRegex.test(credentials.email)) {
          setError("Invalid email");
        } else if (credentials.password.length < 6) {
          setError("Short password");
        } else {
          setError("");
        }
    }, [credentials]);

    return (
        <div className="flex column primary-shadow more-rounded login-box">
            <h1 className="title">Sign in</h1>
            <p className="sm mt-5">Stay updated on your professional world</p>
            <input
                className="rounded mt-30"
                type="text"
                placeholder="Email or Phone"
                onChange={(e) => {
                    setCredentials({
                        ...credentials,
                        email: e.target.value,
                    });
                }}
            />
            <input
                className="rounded mt-20"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                    setCredentials({
                        ...credentials,
                        password: e.target.value,
                    });
                }}
            />

            {error !== "" && <p className="sm red-text mt-5">{error}</p>}

            <button
                className="white-text primary-bg extra-rounded mt-30 pointer"
                onClick={() => login()}>Sign in
            </button>
        </div>
    );
};

export default Login;