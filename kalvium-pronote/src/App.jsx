import { Component } from 'react'
import './App.css'
import Input from './Component/Input'
import List from './Component/List'

class App extends Component{

constructor (){

super()

this.state = {
  value:"" ,
  data: []
}

}

handleChange = (text) =>{
  this.setState({value : text})
}

handleSubmit = () =>{

  this.state.data.push(this.state.value)
  this.setState({value:""})

}

handleDelete = (index) =>{

  this.state.data.splice(index,1)
  this.setState({data:this.state.data})

}

handleUpdate = (index) =>{

  const data = prompt()
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.data[index] = data
  this.setState({data:this.state.data})

}

render(){

  return (
    <>
    
    {/* <div id='input'>

    <input type = 'text' placeholder='Enter Text' value={this.state.value} onChange={ (e)=>{ this.setState({value : e.target.value})} } />
    <button onClick={this.handleSubmit}>Create</button>

    </div> */}

    <div>
      <h1>Your Tasks Your Job!!.</h1>
    </div>

    <Input className="inputbox" inputValue={this.state.value} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>

    <div id='text'>
      <h2>{this.state.value}</h2>
    </div>

    <List data={this.state.data} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
    
    </>
  )
}
}

export default App