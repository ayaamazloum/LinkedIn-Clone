import './style.css';
import Header from '../Header/header';

const UserProfile = () => {
    const userInfo = localStorage.getItem('userProfileId');
    return <div className="user-profile-page full-width pb-70">
        <Header></Header>
        <div className='info-container flex column white-bg mt-30 more-rounded primary-shadow'>
            <div className='cover-image'></div>
            <img className='result-profile-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExUlEQVR4nNWZz28bRRTH9wIVZw5QgYSQECDoX4HEFVEhgcqJQykICBxAghuIQ6ImTpMImlIudZu4SZw6saGx/CuJ7aTr+LeduLZ3nNgzjj3jpgKJJEgEUAY9x24T/0ji2bUtRvpK1npn5vNm3rx5MytJGpRc7sGzKFd6HxE6omBmVzDNKIT9jgj9GwS/y88ws5ffyZcuQB2pmyVZKDytYPY5wiyICONCwiygYNYDbXUMHG1uPq9gOqxg9qcweJ0hdFfBbEjJ559rG3goxJ9ApPQFwnRHM3ByVDAoCmHfIYTOaAqfyhZeQYTG2gWO6hVNFgovawKPMH2nnaOOmopuK7nieVXwCmEfIEz/6Tw8q7gU/RcR+rEgPP2oW+Cofm30tOw2B9Z3Hx5VZiKdL759KvhM/sFLCqF/dBsa1QrTnXSu+Oqx8IlE4kmtok0qW+ThFC4rmS1qMxOERSCcN3cdwr5R08FaZpPPeqL8R5Ob996yHdHVGQ83e6I8sV5Q605fNYSHXRB2RNGGrfIa7zc468BrNWBwcpsvocqVknjrbL0BmA6LNjrpCp4IXqspV1CFEWywUWImlNuYvbGW4av6ZSkmOgu7RxLAclYp0FDwfpb3jdmFDegbs/NgMitkRBqzTx8vXsGUWD8nC8NXpbfKorPgP3AfvHVWwXS/1QYgmqgZ/cOzkNhoPcwC88ZG6Rnp4CTV+ggshtOq4XsrcocVMTci7D0Jjngile/eW9PMgDl5VcgAOATBAraLVLaoiD61sngFoxFhVpiBDZHKsBlpZYDDL7axwUUBRKDfRCrLq+uaGeBb3RCbAcweQv6zJ2g91024VMMPTrjKbQkxEPaXsAGgWXdUtQFmT1TU/ysGCLoQ6H62wK9MzgvDD03N82RWRXYKLqRgui7cAGHcn8jyy+OOluEvj9v5ypqg7z9244xwGD2s5TjiuomTU+mq4N3leEZVn4fDqNBGVquYQvgt28qJ8GM2P4+hvBbw/GAjy5cuaNFYVeE05r8ux8tJ2k9mb1nwG55F0lizfhBhPEPYuxIkRCLJXLelVJO5Sjod+N8ZQKjv8IGmp9tAqFXl6SdHjpRqDvTNBHm+SK6PWj1SVmZhSBy0wOdDqfLh/mfzEtfdrt8XdLed5f/gnYVQSq1hOk2uVZZiiOutPqGTGdTRW318OYZahKfbTT9PIcK+Pk0jvsQ6v25Z0iwbvTbr5XJ8/VQGKDn6pdSswLUdXN8dd1044QxoBt5bI2gb+mgKT1j42KvF4y53IynMf5hebBt8b0XQB2yGDRbuDnwpOhb+0XrIFc8fvl6HpEuL3P+0Gpx0HUn0gCVDSm+dCv6REYRegsqhZK5hVGm3BgzO8qUX7LhpXLooiZR4ZvPD4amFjsP3VjRsXOCrmfxnkppyxx35dsDg2O80fL/BsT+5EPpe0qIY3ZE3R02e3U7Bj5rcuyZP6A1Jy2JF6MxN64oFRqado25wBOyyLD8ltauYFmPnbsz5wloa0m9w7Ovn5JDVG3lN6lSxrMReHLf5p0dn3NuiqcRVk3t7zOY33rkXfqFj4I2KyR44N+EMDt24K0euzXgfjhjn92Dh940BKIREx/6IcWHvunlpSz/nC0+6Alem56Ova9H5fwbco6rSlw17AAAAAElFTkSuQmCC"/>
            <h2>Aya Mazloum</h2>
            <p className='grey-text'>Baalbek</p>
            <p>Bio</p>
            <button className='white-bg primary-text extra-rounded mb-10'>Follow</button>
        </div>
    </div>
};

export default UserProfile;