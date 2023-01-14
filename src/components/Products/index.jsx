import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [buttonState, setButtonState] = useState(true)
  const [value, setValue] = useState('')
  
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://northwind.vercel.app/api/products"
      );
      const data = await response.data;
      setData(data);
    }
    getData();
  }, []);

  const handleClick = () => {
    setButtonState(!buttonState)
  }

  const handleChange = (event) => {
    setValue(event.target.value.toLowerCase())
  }
  return <div className="container">
    <h1 className="font-bold text-4xl mb-2">Products</h1>
    <div>
      <input type="text" className="bg-green-600 text-white placeholder-gray-50 py-2 px-4 mr-2 rounded-xl" onChange={(eve) => handleChange(eve)} placeholder="Search by name"/>
      <button className="bg-red-600 py-2 px-4 rounded-xl text-white" onClick={handleClick}>Sort By Price</button>
    </div>
    <ul className="flex flex-wrap gap-3">
    {data.filter((product) => product.name.toLowerCase().includes(value))
    .sort((a,b) => {
      if(buttonState){
        return a.unitPrice - b.unitPrice
      }else{
        return b.unitPrice - a.unitPrice
      }      
    }).map((product) => {
      return (
        <li key={product.id} className='w-[calc(33%-12px)] py-2 my-2 bg-gray-500 rounded-3xl'>
          <p className="text-green-600 font-bold">Name: {product.name}</p>
          <p className="text-blue-400 font-bold">Price: {product.unitPrice}</p>
        </li>
      )
    })}
    </ul>
  </div>;
};

export default Products;
