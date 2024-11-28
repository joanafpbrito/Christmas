import { Link } from "react-router-dom";

function CountDown({dataList}) {
console.log(dataList);
    return(
        <div>
            {
            (dataList && dataList.length > 0) ? ( 
            
                <div> 
                    {dataList.map((i) =>
                   (
                    <li key={i.days}> 
                        <p>{i.days} {i.hours} {i.minutes} {i.seconds} </p>
                    </li> )
                )}    
                </div>

            ):(
            
            <div>
            <h1> You have been bad!</h1>
            <h2> Christmas is not available! </h2>
            <h3><Link to ="/">Return home and be a better person...</Link></h3>
            </div>)
            }
            
        </div>
); 
}

export default CountDown;