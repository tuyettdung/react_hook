import axios from "axios";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const UseSearchParamDemo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const[arProduct,setArrProduct] = useState([]);
  const keywordRef = useRef("");

  //Lấy ra keyword từ url:
  let keyword = searchParams.get('keyword');

  const getProductByKeyword = async() => {
    let res = await axios({
        url:`https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
        method:'GET'
    })
    setArrProduct(res.data.content);
  }

  useEffect(()=>{
    if(keyword != null){
        getProductByKeyword()
    }

  },[keyword])

  const handleChange = (e) => {
    let { value } = e.target;
    keywordRef.current = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(keywordRef.current);
    //đưa keyword lên thanh url
    setSearchParams({
        keyword: keywordRef.current
    })
  };

  return (
    <div className="container">
      <h3>Search</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            id="txtTuKhoa"
            onChange={handleChange}
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="mt-2">
        <h3>Search Result </h3>
        <div className="row">
          {arProduct.map((item)=>{
            return <div className="col-3" key={item.id}>
            <div className="card">
              <img src={item.image} alt="" />
              <div className="card-body">
                <h3>{item.name} </h3>
                <p>{item.price} </p>
                <NavLink to={`/detail/${item.id}`} className="btn btn-dark">
                  View Detail
                </NavLink>
              </div>
            </div>
          </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default UseSearchParamDemo;
