import React from 'react'
import { Component } from 'react'

class Form extends Component{
    constructor(props){
       super(props);

       this.state={fullname:"",
            email:"",
            password:""
            }
    }
    
    handlechangeall=(event)=>{
        this.setState({[event.target.name]:event.target.value})

    }




    handlesubmit=(event)=>{
      alert(`my name is ${this.state.fullname}
       My email id is ${this.state.email}
       My password is ${this.state.number}`);
      event.preventDefault()
    }
    
    render(){
  return (
    <div>
        <form onSubmit={this.handlesubmit}>
            <label>Fullname</label>
            <input type='text' value={this.state.fullname} placeholder="Enter name"
            onChange={this.handlechangeall} name='fullname'
            autoComplete='off'></input>
            <br/>
            <label>Email</label>
            <input type='text'  value={this.state.email} placeholder="Enter email"
            onChange={this.handlechangeall} autoComplete='off' name='email'></input>
            <br/>
            <label>Password</label>
            <input type='text' value={this.state.password} placeholder="Enter password"
            onChange={this.handlechangeall} autoComplete='off' name='password'></input>
            <br/>
            
            <input type='submit' value='Send'></input>
            <br/>
        </form>
    </div>
  )
}
}
export default Form