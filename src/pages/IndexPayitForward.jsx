import { useState } from "react";
import Button from "../components/Button";
import { CHARITY, SUGAR } from "../data/list";
import ChristmasCard from "../components/ChirstamasCard";

function PayitForward () {
    // um estado para dar falso e verdadeira no active, o conteudo a mostrar que será declarado em baixo

    let theirWhish = "This Christmas We Will Make Someone Happier:";
    const [selection, setSelection] = useState();

    function showContent (option) {
      setSelection(option);

    }

    return (
        <>
        <div>
            <div className="myBtnContainer">
                <Button selected={() => showContent("puskas")} isActive={selection == "puskas"}> Puskas Morcão </Button>
                
                <Button selected={() => showContent("queen")} isActive={selection == "queen"}> Queen Torpedo </Button> 

                <Button selected={() => showContent("kiara")} isActive={selection == "kiara"}> Kiara Gordinha </Button>

                <Button selected={() => showContent("milka")} isActive={selection == "milka"}> Milka Furão </Button>
            </div>

        {selection && (
            <div>
                <p className="title">{theirWhish}</p> 
                <div className="container">
                {CHARITY[selection].map((i) =>
                    <ChristmasCard
                    key = {i.institution}
                    product = {i.institution}
                    join = "para a associação:"
                    qt = {i.item}
                    />
                )}
                </div>  
            </div>

        )}

         </div>
</>
    );
}

export default PayitForward;