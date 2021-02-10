import {Link} from "react-router-dom";

const Offer = () => {
    console.log("Offer page");
    return(
        <div className="offer">
            <p>Offer page</p>
            <Link to='/'>Go to Home</Link>
        </div>
    )
}

export default Offer;