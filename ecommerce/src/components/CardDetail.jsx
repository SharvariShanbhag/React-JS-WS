import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import data from '../data.js';

const CardDetail = () => {
  const [fruit, setFruit] = useState(null);
  const { ID } = useParams();

  useEffect(() => {
    const fruitItem = data.find((f) => f.id.toString() === ID);
    if (fruitItem) {
      setFruit(fruitItem);
    }
  }, [ID]);

  if (!fruit) return <h3>Loading...</h3>;

  return (
    <>
      <div>
        <h2>{fruit.name}</h2>
        <img src={fruit.image} alt="fruit" style={{ width: "100%", height: "400px" }} />
        <p>Details: {fruit.description}</p>
        <Link to="review">Reviews</Link> | <Link to="likes">Likes</Link>
      </div>

      <Routes>
        <Route path="review" element={<Review />} />
        <Route path="likes" element={<Likes />} />
      </Routes>
    </>
  );
};

const Review = () => {
  return (
    <div className='container w-50'>
      <p>User says: I don't like JavaScript</p>
      <p>User1 says: I like JavaScript</p>
    </div>
  );
};

const Likes = () => {
  return <p>⭐⭐⭐⭐⭐</p>;
};

export default CardDetail;
