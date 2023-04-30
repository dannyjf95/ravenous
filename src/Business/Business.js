import React from "react";
//import css eventually
export function Business() {
  const business = {
    src: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg" /** */,
    name: "MarginOtto Pizzeria" /** */,
    address: "1010 Paddington Way" /** */,
    city: "Flavortown" /** */,
    state: "NY" /** */,
    zipCode: "10101" /** */,
    category: "Italian" /** */,
    rating: 4.5,
    reviewCount: 90,
  };
  const styles = {
    
    display: "flex",
    justifyContent: "space-around",
    
  };
  const businessContainer = {
    flexDirection: "column",
    justifyContent: "space-between",
    display: "flex",
    width: "16.66rem",
    margin: "0 0.5rem 2.3rem 0.5rem",
  };
  const img = {
    height: "16.66rem",
    overflow: "hidden",
  }
  
  //avoid compiling errors
// img;
// businessContainer;
  return (
    <div /**container */>
      <div className="business-image" style={{textAlign: 'center'}}>
        <img
          src={business.src}          
        />
        {business.name.toUpperCase()}
      </div>

      <h3></h3>
      <div style={styles}>
        <div className="business-details">
          <p>{business.address}</p>
          <p>{business.city} </p>
          <p>{`${business.state} ${business.zipCode}`} </p>
          <p>{}</p>
        </div>
        <div className="business-type-ratings">
          <p>{business.category.toUpperCase()}</p>
          <p>{`${business.rating} stars`}</p>
          <p>{`${business.reviewCount} reviews`}</p>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
