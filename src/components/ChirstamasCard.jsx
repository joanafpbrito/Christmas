import "../componentsCSS/christmasCard.css"

function ChristmasCard(props) {
    return (
        <div >
            <div  className="card" >
                
                <hr />
                <h4>{props.qt}</h4>
                <p>{props.join}</p>
                <h2>{props.product}</h2>
                <hr />
                </div>
                

        </div>
        
    );
}

export default ChristmasCard;