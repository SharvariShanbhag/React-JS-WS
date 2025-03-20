import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setCards(data);
    }
  }, [data]);

  return (
    <div className="container bg-light py-4">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
        
      </h2>
      <div className="row justify-content-center">
        {cards.length > 0 ? (
          cards.map((elmt) => (
            <div key={elmt.id} className="col-md-4 col-sm-6 mb-4">
              <Card fruit={elmt} />
            </div>
          ))
        ) : (
          <h4 className="text-center text-danger">No data available</h4>
        )}
      </div>
    </div>
  );
};

export default CardList;