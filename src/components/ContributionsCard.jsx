import "../componentsCSS/christmasCard.css"

function ContributionsCard(props) {
    return (
        <div >
            <div  className="card" >
                
                <hr />
                <h4>{props.name} has donated {props.product} to {props.institution}! </h4>
                <h3>Thank you! Together we are stronger!</h3>
                <hr />
            </div>
        </div>
        
    );
}

export default ContributionsCard;