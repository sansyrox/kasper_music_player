import React, { Component } from 'react';
import './App.css';
import SearchBar from '../components/searchbar/searchbar';
import SignIn from '../components/signin/signin';
import Register from '../components/register/register';
import SideMenu from '../components/sidemenu/sidemenu';
import MusicPlayerPage from './MusicPlayerPage';
import LandingPage from './LandingPage';
import Cookies from 'universal-cookie';

const BASE_URL = 'https://api.beatnik.world/';

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
    this.recentSong = [];
    
    
    this.recentRec = [];
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

  componentDidMount() {
    // this.recentSong = window.sessionStorage.getItem("songCache").split(",").slice(0,1);
    
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState);
      const cookies = new Cookies();
      console.log(cookies.get("loggedIn"))
      cookies.set("loggedIn","false")
      window.location.reload()
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
    console.log(res);
    // this.refs.searchtoggle
    // this.
    
  }

  onPlayClick = () => {
    fetch(`${BASE_URL}play?vid=${this.state.song.id}`)
    this.setState({play:!this.state.play})
  }

  onPauseClick = () => {
    fetch(`${BASE_URL}pause`)
    this.setState({play:!this.state.play})
  }

  onSetInput = (value) => {
    this.setState({ input: value});
  }

  render() {
    const cookies = new Cookies();
    console.log(cookies.get("loggedIn"))

    if (cookies.get("loggedIn")==="true") {
      // console.log(this.state.isSignedIn);
      // this.setState({isSignedIn: true})
      return (<div className='flex'>
      <SideMenu isSignedIn={cookies.get("loggedIn")==="true"} onRouteChange={this.onRouteChange} />
      <div className='cardsection flex flex-column'>
        <div>
          {
            window.location.pathname.split('/')[1]!=="recent"?
            <SearchBar isSignedIn={cookies.get("loggedIn")==="true"} onRouteChange={this.onRouteChange} toggleSearch={this.toggleSearch}  onInputChange={this.onInputChange}/>:
            ''
          }
          
        </div>
        
        {
          window.location.pathname.split('/')[1]==="recent"?
          <MusicPlayerPage song={this.recentSong} recent={"recent"} recommendations={this.state.recommendations}/>
          :
          this.state.routesearch===false?<LandingPage toggleSearch={this.toggleSearch} onSetInput={this.onSetInput} />:<MusicPlayerPage ref="searchtoggle" song={this.state.song} recommendations={this.state.recommendations}/>
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
