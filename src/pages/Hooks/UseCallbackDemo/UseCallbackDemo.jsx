import React, { useState, useCallback } from 'react'
import Child from './Child';

const UseCallbackDemo = () => {
    const [number,setNumber] = useState(1);
    const [like,setLike] = useState(1);
    console.log('parent render');

    const renderNumber = () => {
        return <div>
            <i className='fa fa-user'>{number}</i>
        </div>
    }


    //useCallback dùng để catch lại địa chỉ hàm phụ thuộc tham số, nếu tham số thay đổi thì hàm đc tạo mới
    const renderNumberCallback = useCallback(renderNumber,[number]);



  return (
    <div className='container'>
        <button className='btn btn-danger' onClick={()=>{
            setLike(like + 1);
        }}>
            <i className='fa fa-heart'>{like}</i>
        </button>
        <h3>Number: {number}</h3>
        <button className='btn btn-dark' onClick={()=>{
            setNumber(number + 1)
        }}>+</button>

        <Child renderNumberCallback={renderNumberCallback} />

    </div>
  )
}

export default UseCallbackDemo