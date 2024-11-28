import { useState } from "react";
import Button from "../components/Button";
import { SUGAR } from "../data/list";
import ChristmasCard from "../components/ChirstamasCard";

function GiftList () {
    // um estado para dar falso e verdadeira no active, o conteudo a mostrar que será declarado em baixo

    let myWhish = "This Christmas I Will Eat:";
    const [selection, setSelection] = useState();
    const [selection2, setSelection2] = useState();

    function showContent () {
      setSelection(true);
      setSelection2(false);
     
    
    }

    function showContent2 () {
        setSelection2(true);
        setSelection(false);
      }
    return (
        <>
        <div>
            <div className="myBtnContainer">
                <Button selected={showContent} isActive={selection}> Joana </Button>

                <Button selected={showContent2} isActive={selection2}> João </Button> 
            </div>

        {selection && (
            <div>
                <p className="title">{myWhish}</p>
                <div className="container">
                {SUGAR.joana.map((i) =>
                    <ChristmasCard
                    key = {i.dessert}
                    product = {i.dessert}
                    join = "de"
                    qt = {i.qt}
                    />
                )}
                </div>  
            </div>

        )}

        {selection2 && (
            <div>
                <p className="title">{myWhish}</p>
                <div className="container">
                {SUGAR.joao.map((i) =>
                    <ChristmasCard
                    key = {i.dessert}
                    product = {i.dessert}
                    join = "de"
                    qt = {i.qt}
                    />
                )}
                </div> 
            </div>

        )}  

         </div>
</>
    );
}

export default GiftList;