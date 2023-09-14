import React from 'react'
import { useState,useEffect} from 'react';
import axios from "axios";
import './Home.css'
const Home = () => {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setdata(response.data);
      console.log(data);
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className="home">
      {data.length>0 }
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              ADD TO CART
            </button>
          </div>
        );
      })}
    </div>
    
  )
}

export default Home