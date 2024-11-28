import { useState, useEffect } from "react";
import ContributionsCard from "../components/ContributionsCard";

function TotalContributions ({ users }) {

    const [total, setTotal] = useState();

    useEffect(() => { 
        fetch("http://localhost:2024/users.json")
        .then((response) => {return response.json()})
        .then((responseData) => { setTotal(responseData.users);
        });
    }, []);
console.log(responseData);

    return (
        <section>
        <h1 className="title">Total Contributions So Far</h1>     
        
        {users.length > 0 ? (
                <div className="container">
                {users.map((i) =>
                    <ContributionsCard
                    key = {i.name}
                    name = {i.firstName + i.lastName}
                    product = {i.item}
                    institution = {i.institution}
                    />
                )}
                </div>  
                ): (
                    <div>
                        <p>There are no Contributions to show! Be the first</p>
                    </div>       
                    )
        }
    </section> 
    );
}

export default TotalContributions;