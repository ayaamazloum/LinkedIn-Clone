import './style.css';
import Logo from "../../assets/images/logo-sm.png";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const navigate = useNavigate();

    const [ usersResult, setUsersResult ] = useState();

    return <div className='header flex row'>
        <div className='flex center gap-10'>
            <img className='header-logo' src={Logo} alt='LinkedIn' />
            <div className='search-box flex center gap-10 rounded'>
                <img src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
                <input
                    type='text'
                    placeholder='Search'
                    onChange={async (e) => {
                        const text = e.target.value;
                        if (text == "") {
                            setUsersResult([]);
                            return;
                        }
                        const formData = new FormData();
                        formData.append('text', text);
                        const response = await axios.post("http://127.0.0.1/LinkedIn-Clone/Backend/findUsers.php", formData);
                        const result = response.data.users;
                        setUsersResult(result ?? []);
                    }}
                />
                <div className='results-container rounded'>
                    {usersResult?.map((user, index) => {
                        return <div
                            className='result-item rounded flex gap-10'
                            onClick={(e) => {
                                localStorage.setItem('userProfileId', JSON.stringify(usersResult[index]));
                                navigate("/UserProfile");
                            }
                            }>
                                <img src="https://img.icons8.com/ios-filled/50/search--v1.png" alt="search--v1" />
                                <p>{user.company_name ?? user.first_name}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className='flex row center gap-10'>
            <img className='profile-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExUlEQVR4nNWZz28bRRTH9wIVZw5QgYSQECDoX4HEFVEhgcqJQykICBxAghuIQ6ImTpMImlIudZu4SZw6saGx/CuJ7aTr+LeduLZ3nNgzjj3jpgKJJEgEUAY9x24T/0ji2bUtRvpK1npn5vNm3rx5MytJGpRc7sGzKFd6HxE6omBmVzDNKIT9jgj9GwS/y88ws5ffyZcuQB2pmyVZKDytYPY5wiyICONCwiygYNYDbXUMHG1uPq9gOqxg9qcweJ0hdFfBbEjJ559rG3goxJ9ApPQFwnRHM3ByVDAoCmHfIYTOaAqfyhZeQYTG2gWO6hVNFgovawKPMH2nnaOOmopuK7nieVXwCmEfIEz/6Tw8q7gU/RcR+rEgPP2oW+Cofm30tOw2B9Z3Hx5VZiKdL759KvhM/sFLCqF/dBsa1QrTnXSu+Oqx8IlE4kmtok0qW+ThFC4rmS1qMxOERSCcN3cdwr5R08FaZpPPeqL8R5Ob996yHdHVGQ83e6I8sV5Q605fNYSHXRB2RNGGrfIa7zc468BrNWBwcpsvocqVknjrbL0BmA6LNjrpCp4IXqspV1CFEWywUWImlNuYvbGW4av6ZSkmOgu7RxLAclYp0FDwfpb3jdmFDegbs/NgMitkRBqzTx8vXsGUWD8nC8NXpbfKorPgP3AfvHVWwXS/1QYgmqgZ/cOzkNhoPcwC88ZG6Rnp4CTV+ggshtOq4XsrcocVMTci7D0Jjngile/eW9PMgDl5VcgAOATBAraLVLaoiD61sngFoxFhVpiBDZHKsBlpZYDDL7axwUUBRKDfRCrLq+uaGeBb3RCbAcweQv6zJ2g91024VMMPTrjKbQkxEPaXsAGgWXdUtQFmT1TU/ysGCLoQ6H62wK9MzgvDD03N82RWRXYKLqRgui7cAGHcn8jyy+OOluEvj9v5ypqg7z9244xwGD2s5TjiuomTU+mq4N3leEZVn4fDqNBGVquYQvgt28qJ8GM2P4+hvBbw/GAjy5cuaNFYVeE05r8ux8tJ2k9mb1nwG55F0lizfhBhPEPYuxIkRCLJXLelVJO5Sjod+N8ZQKjv8IGmp9tAqFXl6SdHjpRqDvTNBHm+SK6PWj1SVmZhSBy0wOdDqfLh/mfzEtfdrt8XdLed5f/gnYVQSq1hOk2uVZZiiOutPqGTGdTRW318OYZahKfbTT9PIcK+Pk0jvsQ6v25Z0iwbvTbr5XJ8/VQGKDn6pdSswLUdXN8dd1044QxoBt5bI2gb+mgKT1j42KvF4y53IynMf5hebBt8b0XQB2yGDRbuDnwpOhb+0XrIFc8fvl6HpEuL3P+0Gpx0HUn0gCVDSm+dCv6REYRegsqhZK5hVGm3BgzO8qUX7LhpXLooiZR4ZvPD4amFjsP3VjRsXOCrmfxnkppyxx35dsDg2O80fL/BsT+5EPpe0qIY3ZE3R02e3U7Bj5rcuyZP6A1Jy2JF6MxN64oFRqado25wBOyyLD8ltauYFmPnbsz5wloa0m9w7Ovn5JDVG3lN6lSxrMReHLf5p0dn3NuiqcRVk3t7zOY33rkXfqFj4I2KyR44N+EMDt24K0euzXgfjhjn92Dh940BKIREx/6IcWHvunlpSz/nC0+6Alem56Ova9H5fwbco6rSlw17AAAAAElFTkSuQmCC"/>
            <p className='signout'
                onClick={() => {
                        localStorage.removeItem('user');
                        navigate("/");
                    }
                }
            >Sign Out</p>
        </div>
    </div>
};

export default Header;