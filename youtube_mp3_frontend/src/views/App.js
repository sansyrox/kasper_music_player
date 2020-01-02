import React, { Component } from 'react';
import './App.css';
import SearchBar from '../components/searchbar/searchbar';
import SignIn from '../components/signin/signin';
import Register from '../components/register/register';
import SideMenu from '../components/sidemenu/sidemenu';
import MusicPlayerPage from './MusicPlayerPage';
import LandingPage from './LandingPage';
import Cookies from 'universal-cookie';

const BASE_URL = 'http://localhost:7070/';

const initialState = {
  input:'',
  song:{
    id:'',
    title:'',
    url:''
  },
  recommendations:[],
  route:'signin',
  routesearch:false,
  play:false,
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

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  toggleSearch = async () => {
    const req= await fetch(`${BASE_URL}search?vid=${this.state.input}`)
    const res= await req.json() 
    this.setState({song:res})
    this.setState({routesearch:true,play:false})

    const req2= await fetch(`${BASE_URL}recommend?vid=${this.state.song.id}`)
    const res2= await req2.json() 
    console.log(res2)
    this.setState({recommendations:res2.items})
  }

  onPlayClick = () => {
    fetch(`${BASE_URL}play?vid=${this.state.song.id}`)
    this.setState({play:!this.state.play})
  }

  onPauseClick = () => {
    fetch(`${BASE_URL}pause`)
    this.setState({play:!this.state.play})
  }

  render() {
    const cookies = new Cookies();
    console.log(cookies.get("loggedIn"))

    if (cookies.get("loggedIn")==="true") {
      // console.log(this.state.isSignedIn);
      // this.setState({isSignedIn: true})
      return (<div className='flex'>
      <SideMenu isSignedIn={cookies.get("loggedIn")==="true"} onRouteChange={this.onRouteChange}/>
      <div className='cardsection flex flex-column'>
        <div>
          <SearchBar isSignedIn={cookies.get("loggedIn")==="true"} onRouteChange={this.onRouteChange} toggleSearch={this.toggleSearch} onInputChange={this.onInputChange}/>
        </div>
        {
          this.state.routesearch===false?<LandingPage />:<MusicPlayerPage song={this.state.song} recommendations={this.state.recommendations}/>
        }
      </div>
    </div>)
    }
    else {
      return (
        <div className="App">
          {
            (this.state.route==='signin')||(this.state.route==='signout') ?
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            :<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>  
          }
        </div>
      );
      
    }

    
  }
}

export default App;
