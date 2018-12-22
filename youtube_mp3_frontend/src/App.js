import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar/searchbar';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import SideMenu from './components/sidemenu/sidemenu';
import Carousel from './components/carousel/carousel';
import WeeklyTop from './components/weeklytop/weeklytop'

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

  handleClick() {
    this.setState({active:1})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.route==='home' ?
          <div className='flex'>
            <SideMenu isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
            <div className='cardsection flex flex-column'>
              <div className=''>
                <SearchBar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
              </div>
              <div className=''>
                <p className='f3 bb b--white blue w-25 pa1 mt4 '>Recommendations</p>
                <Carousel/>
              </div>
              <div className='weekly'>
                <p className='f3 bb b--white blue w-25 pa1 mt4'>Weekly tops</p>
                <WeeklyTop />
              </div>
            </div>
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
