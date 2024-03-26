import './style.css';

import axios from 'axios';
import { useState } from "react";

const AddPost = () => {
    const [post, setPost] = useState({ text: "", media: "" });
    const [posted, setPosted] = useState("");

    return <div className="add-post flex column center more-rounded mt-30">
        <div className='flex row gap-10'>
            <img className='profile-img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExUlEQVR4nNWZz28bRRTH9wIVZw5QgYSQECDoX4HEFVEhgcqJQykICBxAghuIQ6ImTpMImlIudZu4SZw6saGx/CuJ7aTr+LeduLZ3nNgzjj3jpgKJJEgEUAY9x24T/0ji2bUtRvpK1npn5vNm3rx5MytJGpRc7sGzKFd6HxE6omBmVzDNKIT9jgj9GwS/y88ws5ffyZcuQB2pmyVZKDytYPY5wiyICONCwiygYNYDbXUMHG1uPq9gOqxg9qcweJ0hdFfBbEjJ559rG3goxJ9ApPQFwnRHM3ByVDAoCmHfIYTOaAqfyhZeQYTG2gWO6hVNFgovawKPMH2nnaOOmopuK7nieVXwCmEfIEz/6Tw8q7gU/RcR+rEgPP2oW+Cofm30tOw2B9Z3Hx5VZiKdL759KvhM/sFLCqF/dBsa1QrTnXSu+Oqx8IlE4kmtok0qW+ThFC4rmS1qMxOERSCcN3cdwr5R08FaZpPPeqL8R5Ob996yHdHVGQ83e6I8sV5Q605fNYSHXRB2RNGGrfIa7zc468BrNWBwcpsvocqVknjrbL0BmA6LNjrpCp4IXqspV1CFEWywUWImlNuYvbGW4av6ZSkmOgu7RxLAclYp0FDwfpb3jdmFDegbs/NgMitkRBqzTx8vXsGUWD8nC8NXpbfKorPgP3AfvHVWwXS/1QYgmqgZ/cOzkNhoPcwC88ZG6Rnp4CTV+ggshtOq4XsrcocVMTci7D0Jjngile/eW9PMgDl5VcgAOATBAraLVLaoiD61sngFoxFhVpiBDZHKsBlpZYDDL7axwUUBRKDfRCrLq+uaGeBb3RCbAcweQv6zJ2g91024VMMPTrjKbQkxEPaXsAGgWXdUtQFmT1TU/ysGCLoQ6H62wK9MzgvDD03N82RWRXYKLqRgui7cAGHcn8jyy+OOluEvj9v5ypqg7z9244xwGD2s5TjiuomTU+mq4N3leEZVn4fDqNBGVquYQvgt28qJ8GM2P4+hvBbw/GAjy5cuaNFYVeE05r8ux8tJ2k9mb1nwG55F0lizfhBhPEPYuxIkRCLJXLelVJO5Sjod+N8ZQKjv8IGmp9tAqFXl6SdHjpRqDvTNBHm+SK6PWj1SVmZhSBy0wOdDqfLh/mfzEtfdrt8XdLed5f/gnYVQSq1hOk2uVZZiiOutPqGTGdTRW318OYZahKfbTT9PIcK+Pk0jvsQ6v25Z0iwbvTbr5XJ8/VQGKDn6pdSswLUdXN8dd1044QxoBt5bI2gb+mgKT1j42KvF4y53IynMf5hebBt8b0XQB2yGDRbuDnwpOhb+0XrIFc8fvl6HpEuL3P+0Gpx0HUn0gCVDSm+dCv6REYRegsqhZK5hVGm3BgzO8qUX7LhpXLooiZR4ZvPD4amFjsP3VjRsXOCrmfxnkppyxx35dsDg2O80fL/BsT+5EPpe0qIY3ZE3R02e3U7Bj5rcuyZP6A1Jy2JF6MxN64oFRqado25wBOyyLD8ltauYFmPnbsz5wloa0m9w7Ovn5JDVG3lN6lSxrMReHLf5p0dn3NuiqcRVk3t7zOY33rkXfqFj4I2KyR44N+EMDt24K0euzXgfjhjn92Dh940BKIREx/6IcWHvunlpSz/nC0+6Alem56Ova9H5fwbco6rSlw17AAAAAElFTkSuQmCC" />
            <input
                className='post-input extra-rounded'
                type='text'
                placeholder='What do you want to talk about?' value={post.text}
                onChange={(e) => setPost({ ...post, text: e.target.value })}
            />
        </div>
        <img className="uploaded-media mt-20 mb-10" src={post.media} />
        <div className='media-input-container flex gap-50'>
            <div className='flex center custom-file-button gap-10'>
                <input
                    className="media-input"
                    type="file"
                    accept="image/jpeg, image/png, video/mp4, video/webm"
                    onChange={(e) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onload = () => {setPost({ ...post, media: reader.result });}
                    }}
                />
                <img src="https://img.icons8.com/ios-glyphs/30/0a66c2/image.png" alt="image"/>
                <label>Media</label>
            </div>
            <div className='flex center custom-file-button gap-10'>
            <img src="https://img.icons8.com/material-rounded/100/a8501a/today.png" alt="today"/>
                <label>Event</label>
            </div>
            <div className='flex center custom-file-button gap-10'>
                <img src="https://img.icons8.com/material-outlined/24/bc5522/web-design.png" alt="web-design" />
                <label>Write Article</label>
            </div>
        </div>
        <button
            className='post-btn mt-20 rounded primary-bg white-text'
            onClick={async () => {
                setPosted("");
                if (post.text == "" && post.media == "") return;
                let dateTime = new Date();
                dateTime = dateTime.toISOString().slice(0, 19).replace('T', ' ');

                const formData = new FormData();
                formData.append('user_id', JSON.parse(localStorage.getItem('user')).user_id);
                formData.append('media', post.media);
                formData.append('content', post.text);
                formData.append('date_time', dateTime);

                const response = await axios.post("http://127.0.0.1/LinkedIn-Clone/Backend/addPost.php", formData);
                response.data.status == "post added successfully" && setPosted("success");
                setPost({ text: "", media: "" });
            }}
        >Post</button>
        {posted == "success" && (<p className='green-text mt-10 sm'>Posted successfully.</p>)}
    </div>;
};

export default AddPost;