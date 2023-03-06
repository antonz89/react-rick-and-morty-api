import { useState,useEffect } from "react";
import Cards from "./Cards";

const ApiData = () => {
    
    const [cardData, setCardData] = useState(null)
    
    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then(res =>{
            return res.json();
        })
        .then(data=>{
            
            setCardData(data.results)
            
        })
        
    },[])

    return ( 
        <div>
            
            {cardData&&<Cards cardData = {cardData}/>}
        </div>
            
    );
}
 
export default ApiData;