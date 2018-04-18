import React ,{Component}  from 'react';
import {LoginForm} from './containers/LoginForm';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <LoginForm/>

      </div>
    )
  }
}
export default App;