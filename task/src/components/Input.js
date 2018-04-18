import React from 'react';

export class  Input extends React.Component{
    
    render(){
        return(
            <div className="input">
            <form action="" method="">
                <input type="text" placeholder="Email" onChange={this.props.takeid}/>
                <input type="text" placeholder="password" onChange={this.props.takepass}/> <br/><br/>
               
                <span className="forget">Forget Password</span>

            </form>
            <button className="btn btn-primary large" type="submit" onClick={this.props.operation}>Login</button> <br/><br/>
        </div>
        )
    }
}