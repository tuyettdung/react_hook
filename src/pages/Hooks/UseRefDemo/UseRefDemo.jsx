import React, { useRef } from 'react'
import { useState } from 'react';
import Cart from './Cart';



/** 
 + useRef: tuowng tự useState dùng để lưu giá trị sau mỗi lần render tuy nhiên khi ref thay đổi thì giao diện không phải render lại.
 Ngoài ra useRef còn dùng để truy xuất đến thẻ khi gắn vào thuộc tính ref của thẻ
 + useRef với useState
  useRef dùng để lưu giá trị sau mỗi lần component render tuy nhiên không làm cho component khi thay đổi giá trị
  useState dùng để lưu lại giá trị sau mỗi lần component render tuy nhiên sau khi setState thì component sẽ render lại 


 */
const UseRefDemo = () => {

//     const[userLogin,setUserLogin] = useState({
//         username:'',
//         password:''
//     })
// console.log('user',userLogin);
const elementRef = React.createRef();
const userLoginRef = useRef({
    username:'',
    password:''
})
    const handleChange = (e) => {
        const {id,value} = e.target;
        userLoginRef.current[id] = value
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userLoginRef',userLoginRef.current);
        elementRef.current.handleLike();
    }


  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>username</p>
            <input className='form-control' id='username' onChange={handleChange} />
        </div>
        <div className='form-group'>
            <p>password</p>
            <input className='form-control' id='password' onChange={handleChange} />
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-success my-2'>Login</button>
        </div>
        <hr />
        <div className='w-25'>
            <Cart ref={elementRef}/>
        </div>
    </form>
  )
}

export default UseRefDemo