import Header from "../Header/header";
import AddPost from "../AddPost/AddPost";
import "./style.css";

const Home = () => {
    return <div className="full-width pb-70">
        <Header></Header>
        <div className="flex column center">
            <AddPost></AddPost>
        </div>
    </div>
};

export default Home;