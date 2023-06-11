import React,{memo} from 'react'

const Child = (props) => {
    console.log('child');
  return (
    <div className='bg-dark text-white fs-3 p-3 text-center mt-2'>
        Child
        
        <p>number props: {props.renderNumberCallback()}</p>
        </div>
  )
}

export default memo(Child);
