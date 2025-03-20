import React from "react";
import CardList from "../components/CardList";
 
const HomePage = ({ data }) => {
  return (
    <div>
      <CardList data={data} />
    </div>
  );
};

export default HomePage;
