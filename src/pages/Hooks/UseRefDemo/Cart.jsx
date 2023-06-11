import React, { Component } from 'react'

export default class  extends Component {
    state={
        like: 1
    }

    handleLike = () => {
        this.setState({
            like:this.state.like + 1
        })
    }
  render() {
    return (
      <div className='card'>
        <img src="https://i.pravatar.cc?u=5" alt="" />
        <div className='card-body'>
            <h3>username</h3>
            <p>Age: 19</p>
            <div>
                {this.state.like}
                <i className='fa fa-heart text-danger' style={{cursor:'pointer'}} onClick={()=>{
                    this.handleLike()
                }}></i>
            </div>
        </div>
      </div>
    )
  }
}
