import { Link } from "react-router-dom";

function ErrorPage() {
    return(
        <div>
            <h2>Are you lost?</h2> 
            <h3><Link to = "/">Come back dude</Link></h3>
        </div>
        
    );
}

export default ErrorPage;