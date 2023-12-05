import  { Component } from 'react'

export class Input extends Component {
  render() {
    return (
        <div id='input'>

        <input type = 'text' className='inputbox' placeholder='Enter your Tasks' value={this.props.inputValue} onChange={ (e)=> this.props.handleChange(e.target.value) } />
        <button onClick={this.props.handleSubmit} className='createBtn' >Create</button>
    
        </div>
    )
  }
}

export default Input