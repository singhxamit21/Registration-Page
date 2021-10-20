import React, { Component } from 'react'
import axios from 'axios';
export default class Login extends Component {
    handleClick = e => {
        this.props.history.push("/");
      };
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
            console.log(this.state)
            axios.post("https://jsonplaceholder.typicode.com/todos",this.state)
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            })
        
    }
    
    render() {
        const {email,password}=this.state;
        return (
           
            <div className="bg-light">
                <div className="container">
                    <h1 className="py-2 text-center ">Login Page</h1>
                </div>
                <div className="container">
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <label className="form-label">Email-id</label>
                                <input className="form-control" type="text" name="email" value={email} onChange={this.handleChange} placeholder="Email-id" ></input>
                            </div>
                            <div className="col-12">
                                <label className="form-label mt-3">Password</label>
                                <input className="form-control " type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" ></input>
                            </div>
                            <div className="d-grid gap-2 d-md-block">
                                <button className="btn btn-primary mt-3" type="submit">Login</button>
                            </div>

                        </div>
                    </form>
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary mt-3" onClick={this.handleClick}>Register</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
