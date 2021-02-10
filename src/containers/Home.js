import {Link} from "react-router-dom";

const Home = () => {
    console.log("home page");
    return(
        <div className="home">
            <p>home page</p>
            <Link to='/product'>Go to Product</Link>
        </div>
    )
}

export default Home;