import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const [info, setInfo] = useState({ email: "", password: "", profileType: "user", firstName: "", lastName: "", companyName: "", location: "" });
    const [errors, setErrors] = useState({ email: "", password: "", firstName: "", lastName: "", companyName: "", location: "", response: "" });

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

     return (
        <div className="flex column center">
            <p className="lg">Make the most of your professional life</p>
            <div className="flex column primary-shadow more-rounded signup-box mt-30">
                <label className="mt-20">Email</label>
                <input
                    className="rounded mt-5"
                    type="text"
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            email: e.target.value,
                        });
                        !emailRegex.test(info.email)
                            ? setErrors({ ...errors, email: "Invalid email." })
                            : setErrors({ ...errors, email: "valid" });
                    }}
                />
                {errors.email !== "" && errors.email !== "valid" && <p className="extra-sm red-text mt-5">{errors.email}</p>}

                <label className="mt-20">Password (6+ characters)</label>
                <input
                    className="rounded mt-5"
                    type="password"
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            password: e.target.value,
                        });
                        info.password.length < 5
                        ? setErrors({ ...errors, password: "Short password." })
                        : setErrors({ ...errors, password: "valid" });
                    }}
                />
                {errors.password !== "" && errors.password !== "valid" && <p className="extra-sm red-text mt-5">{errors.password}</p>}
                
                <fieldset>
                    <input
                        className="rounded mt-20 mr-10"
                        type="checkbox"
                        onChange={(e) => {
                            console.log(info.profileType)
                            setInfo({
                                ...info,
                                profileType: e.target.checked ? "company" : "user",
                            });
                        }}
                    />
                    <label>Company Account</label>
                </fieldset>
                {errors.lastName !== "" && errors.lastName !== "valid" && <p className="extra-sm red-text mt-5">{errors.lastName}</p>}
   
                {info.profileType == "user" ?
                    <div className="flex column">
                        <label className="mt-20">First name</label>
                        <input
                            className="rounded mt-5"
                            type="text"
                            onChange={(e) => {
                                setInfo({
                                    ...info,
                                    firstName: e.target.value,
                                });
                                e.target.value.length > 0
                                    ? setErrors({ ...errors, firstName: "valid" })
                                    : setErrors({ ...errors, firstName: "Please enter your first name." });
                            }}
                        />
                        {errors.firstName !== "" && errors.firstName !== "valid" && <p className="extra-sm red-text mt-5">{errors.firstName}</p>}

                        <label className="mt-20">Last name</label>
                        <input
                            className="rounded mt-5"
                            type="text"
                            onChange={(e) => {
                                setInfo({
                                    ...info,
                                    lastName: e.target.value,
                                });
                                e.target.value.length > 0
                                    ? setErrors({ ...errors, lastName: "valid" })
                                    : setErrors({ ...errors, lastName: "Please enter your last name." });
                            }}
                        />
                        {errors.lastName !== "" && errors.lastName !== "valid" && <p className="extra-sm red-text mt-5">{errors.lastName}</p>}
                    </div>
                    : <div className="flex column">
                        <label className="mt-20">Company name</label>
                        <input
                            className="rounded mt-5"
                            type="text"
                            onChange={(e) => {
                                setInfo({
                                    ...info,
                                    companyName: e.target.value,
                                });
                                e.target.value.length > 0
                                    ? setErrors({ ...errors, companyName: "valid" })
                                    : setErrors({ ...errors, companyName: "Please enter your company name." });
                            }}
                        />
                        {errors.companyName !== "" && errors.companyName !== "valid" && <p className="extra-sm red-text mt-5">{errors.companyName}</p>}
                    </div>
                 }
                 
                <label className="mt-20">Location</label>
                <input
                    className="rounded mt-5"
                    type="text"
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            location: e.target.value,
                        });
                        e.target.value.length > 0
                            ? setErrors({ ...errors, location: "valid" })
                            : setErrors({ ...errors, location: "Please enter your location." });
                    }}
                />
                {errors.location !== "" && errors.location !== "valid" && <p className="extra-sm red-text mt-5">{errors.location}</p>}
                
                {errors.response !== "" && <p className="extra-sm red-text mt-5">{errors.response}</p>}
                 
                <button
                    className="white-text primary-bg extra-rounded mt-30 pointer"
                    onClick={() => {
                        if (errors.email !== "valid" || errors.password !== "valid" || (errors.companyName !== "valid" &&
                            (errors.firstName !== "valid" && errors.lastName !== "valid")) || errors.location !== "valid")
                            return;

                        const formData = new FormData();
                        formData.append('email', info.email);
                        formData.append('password', info.password);
                        formData.append('profile_type', info.profileType);
                        formData.append('company_name', info.companyName);
                        formData.append('first_name', info.firstName);
                        formData.append('last_name', info.lastName);
                        formData.append('location', info.location);
                        console.log(formData);
                        axios.post("http://127.0.0.1/LinkedIn-Clone/Backend/signup.php", formData)
                            .then((response) => {
                                if (response.data.status == "user already exists") {
                                    setErrors({ ...errors, response: "Email already exists." })
                                    return;
                                }
                                info.profileType == 'user' ?
                                localStorage.setItem('user', JSON.stringify({
                                    user_id: response.data['user_id'],
                                    role: info.profileType,
                                    first_name: info.firstName,
                                    last_name: info.lastName
                                }))
                                : localStorage.setItem('user', JSON.stringify({
                                    user_id: response.data['user_id'],
                                    role: info.profileType,
                                    company_name: info.companyName
                                }));
                                navigate('/home');
                            }).catch(function (error) {
                                console.error('Error fetching data:', error);
                            });
                    }}>Join
                </button>
            </div>
        </div>
    );
};

export default Signup;