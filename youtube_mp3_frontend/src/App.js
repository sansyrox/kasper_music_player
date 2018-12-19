import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import SignIn from './components/signin/signin';
import Register from './components/register/register';

const initialState = {
  route:'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email:''
  }
}
class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: 
      {
      id:data.id,
      name:data.name,
      email:data.email
      }
    }) 
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState);
    }
    else if (route === 'home') {
      this.setState({isSignedIn:true});
    }
    this.setState({route:route});
    
  }

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {
        this.state.route==='home' ?
        <div>
          <h3>HOME PAGE</h3>
        </div>
        : (
        (this.state.route==='signin')||(this.state.route==='signout') ?
        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/> 
        )
        }
      </div>
    );
  }
}

export default App;
