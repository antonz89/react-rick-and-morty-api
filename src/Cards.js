const Cards = ({cardData}) => {
    
    console.log(cardData)
    
    return ( 
        <div className="row">
            

         
           {cardData.map((card)=>(
                <div className="col-4" key={card.id}>
                    
                    <div className="card" >
                    
                        <img src={card.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <p className="card-text">Name: {card.name}</p>
                              <p className="card-text">Species: {card.species}</p>
                              <p className="card-text">Gender: {card.gender}</p>
                              <p className="card-text">Status: {card.status}</p>


                            </div>
                        </div>
                    
                    
                    
                    
                    

                </div>
                    
                    
                
           ))} 

        </div>
            


     )
}
 
export default Cards;