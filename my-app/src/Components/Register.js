import React, { Component } from 'react'
import axios from 'axios';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useHistory } from 'react-router-dom'

export default class Register extends Component {
    handleClick = e => {
        this.props.history.push("/login");
      };
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             phone:"",
             country:"",
             city:"",
             documents:"",
             password:"",
             cpassword:""
        }
    }
    selectCountry (val) {
        this.setState({ country: val });
      }
    
    selectCity (val) {
        this.setState({ city: val });
      }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    validation=()=>{
        if(!this.state.name || !this.state.email || !this.state.phone || !this.state.documents || !this.state.password || !this.state.cpassword){
            alert("Please Fill the fields")
        }
        if(!this.state.email.includes("@")){
            alert("Please Fill the correct email")
        }
        if(this.state.password != this.state.cpassword){
            alert("Please Enter the correct password")
        }
        return true
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const isvalid = this.validation()
        if(isvalid){
            console.log(this.state)
            axios.post("https://jsonplaceholder.typicode.com/todos",this.state)
            .then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            })
        }
        
    }
    render() {

        const {name,email,phone,country,city,documents,password,cpassword}=this.state;
        return (
            <div className="bg-light">
                <div className="container">
                    <h1 className="py-2 text-center ">Register Page</h1>
                 </div>

            <div className="container">
                <form  onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <label className="form-label">Full Name</label>
                            <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange} placeholder="Full Name" ></input>
                        </div>

                        <div className="col-12">
                            <label className="form-label mt-3">Email-id</label>
                            <div className="input-group">
                                <span className="input-group-text">@</span>
                                <input className="form-control" type="text" name="email" value={email} onChange={this.handleChange} placeholder="Email" ></input>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label mt-3">Password</label>
                            <input className="form-control" type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" ></input>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label mt-3">Conform password</label>
                            <input className="form-control" type="password" name="cpassword" value={cpassword} onChange={this.handleChange} placeholder="conform password" ></input>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label mt-3">Select country</label>
                            <CountryDropdown className="form-control" value={country} onChange={(val) => this.selectCountry(val)} />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label mt-3">Select State</label>
                            <RegionDropdown className="form-control" country={country} value={city} onChange={(val) => this.selectCity(val)} />  
                        </div>

                        <div className="col-md-6">
                            <label className="form-label mt-3">Phone Number</label>
                            <input className="form-control" type="tel" minLength="10" maxLength="10" name="phone" value={phone} onChange={this.handleChange} placeholder="phone" pattern="[0-9]{10}" title="Please Enter the correct Number " ></input>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label mt-3">Attach a File</label>
                            <input className="form-control" type="file" multiple name="documents" value={documents} onChange={this.handleChange} ></input>
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-primary mt-3" type="submit">Submit</button>
                        </div>

                    </div>
                    
                </form>
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary mt-3" onClick={this.handleClick}>Login</button>
                </div>

            </div>
                

                
            </div>
        )
    }
}
