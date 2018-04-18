import React from 'react';
import {Header} from '../components/Header';
import {Logo} from '../components/Logo';
import {Input} from '../components/Input';
import User from '../model/model';

export class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.email="";
        this.pass="";
    }
    operation(){
        var user =new User(this.email , this.pass);   
        console.log("user obj " , user)
        fetch("/login", {method:"POST",body:JSON.stringify(user), headers: {
            "Content-Type": "application/json"
          }}).then(function(response) {
            console.log("data move..")
          }, function(error)    {
            console.log("data not move..")
          })
    }

    takeid(event){
        this.email=event.target.value;
        console.log("take id is run...", this.email);
    }
    takepass(event){
        this.pass=event.target.value;
        console.log("take pass is run..." , this.pass)
       
    }
    
    render(){
        return(
            <div className="form">
                <Header/>
                <Logo/>
                <Input takeid={this.takeid.bind(this)} takepass={this.takepass.bind(this)} operation={this.operation.bind(this)} />
            </div>
        )
    }
}
  



