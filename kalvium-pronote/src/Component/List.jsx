import  { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <div id='list'>

        {
    
          this.props.data.map((el,index)=>{
    
            return <div key={index} className='lists'>
              <h2>{el}</h2>
              <button onClick={()=>this.props.handleDelete(index)}>Delete</button>
              <button onClick={()=>this.props.handleUpdate(index)}>Update</button>
            </div>
        
          })
    
        }
    
        </div>
    )
  }
}