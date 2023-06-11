import React,{useState} from 'react'

const UseStateDemo = () => {

    const [number,setNumber] = useState(10);
    const [img,setImg] = useState('https://i.pravatar.cc?u=1');
    const [fontSize,setFontSize] = useState(30);

    const changeFontSize = (size) => {
        let newSize = fontSize + size;
        setFontSize(newSize)
    }


  return (
    <div className='container'>
        <h3>Ví dụ 1:</h3>
        <h3>Number: {number}</h3>
        <button className='btn btn-dark' onClick={()=>{
            setNumber(number + 4)
        }}>+</button>
        <hr/>
        <div className='mt-2'>
            <h3>Ví dụ 2:</h3>
            <div className='card w-25'>
                <img src={img} alt="" className='w-100' />
                <div className='card-body'>
                    <button className='btn btn-success' onClick={()=>{
                        let newImg = 'https://i.pravatar.cc?u=${Math.floor(Math.random()*100)}'
                        setImg(newImg)
                    }}>Random</button>
                </div>
            </div>
        </div>
        <hr />
        <div className='m-2'>
            <h3>Ví dụ 3:</h3>
            <p style={{fontSize}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam laborum, alias harum modi aliquid nostrum explicabo eligendi reiciendis sunt illum eaque sint, impedit consequuntur voluptas iusto optio maxime quisquam neque asperiores voluptates quia repellat. A tenetur aliquam eveniet nulla voluptas.</p>
            <button className='btn btn-dark mx-2' onClick={()=>{
                changeFontSize(-5)
            }}>-</button>
            <button className='btn btn-dark' onClick={()=>{
                changeFontSize(+5)
            }}>+</button>
        </div>
    </div>
  )
}

export default UseStateDemo