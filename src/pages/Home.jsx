//rafce 
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    const [arrProduct,setArrProduct] = useState([]);
    const getProductApi = async () => {
        const res = await axios({
            url:'https://shop.cyberlearn.vn/api/Product',
            method:'GET'
        })
        setArrProduct(res.data.content)

    }

    useEffect(()=>{
        //chạy sau khi component render (tuowng tự componentDidMount chỉ chạy 1 lần duy nhất sau khi render)
        getProductApi();
        console.log('arrProduct',arrProduct)
    },[])


  return (
    <div className='container'>
        {/* <button className='btn btn-dark' onClick={()=>{
            getProductApi();
        }}>GET api</button> */}
        <h3 className='m-2 text-center'>Shoe Shop</h3>
        <div className='row'>
            {arrProduct.map((item,index)=>{
                return <div className='col-4 mt-2' key={index}>
                <div className='card'>
                    <img src={item.image} alt="" />
                    <div className='card-body'>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <NavLink className='btn btn-dark' to={`/detail/${item.id}`}>View Detail</NavLink>
                    </div>
                </div>
            </div>
            })}
        </div>
    </div>
  )
}

export default Home