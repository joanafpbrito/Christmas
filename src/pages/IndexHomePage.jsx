import { useState } from "react";
import image from "../assets/istockphoto-886243428-2048x2048.jpg";
import Button from "../components/Button";
import Contribution from "../components/Contribution";

function HomePage () {

    const [selection, setSelection] = useState();

    function showContent () {
        setSelection(true);
        
      }

    return (
        <>
        <Button selected={() => showContent()} isActive={selection}>Make a Contribution</Button>

        {selection && (
            <Contribution/>

        )}

        <div className="imagecontainer" >
           
            <div>
           <img src={image} alt="" />
            </div>
        </div>
</>
    )
}

export default HomePage;