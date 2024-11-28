import { Link } from "react-router-dom";
import GiftImg from "../assets/GiftImg.jpg"

function Header() {
    return(
     
      <header>
        <div>
        <Link to ="/"><h1 className="website-title">Christmas Experience</h1> </Link>
        <nav>
        <p>  | <Link to ="/count-down">See How Much time you have left</Link> | <Link to ="/gift-list">Gift List</Link> | <Link to ="/pay-it-forward">Pay It Forward</Link> |</p>
        </nav>
        </div>
        <hr />
      </header>
  );
  }

  export default Header;