import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/searchbar/searchbar';
import SignIn from './components/signin/signin';
import Register from './components/register/register';
import SideMenu from './components/sidemenu/sidemenu';
import Carousel from './components/carousel/carousel';
import WeeklyTop from './components/weeklytop/weeklytop'

const initialState = {
  input:'',
  song:{
    id:'',
    title:''
  },
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
    const req= await fetch(`http://localhost:7070/search?vid=${this.state.input}`)
    const res= await req.json() 
    this.setState({song:res})
    console.log(res)  
    this.setState({routesearch:true,play:false})
  }

  onPlayClick = () => {
    fetch(`http://localhost:7070/play?vid=${this.state.song.id}`)
    this.setState({play:!this.state.play})
  }

  onPauseClick = () => {
    fetch(`http://localhost:7070/pause`)
    this.setState({play:!this.state.play})
  }

  render() {
    return (
      <div className="App">
        {
          this.state.route==='home'?
          (
          <div className='flex'>
            <SideMenu isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
            <div className='cardsection flex flex-column'>
              <div className=''>
                <SearchBar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} toggleSearch={this.toggleSearch} onInputChange={this.onInputChange}/>
              </div>
              {
                this.state.routesearch===false?
                ( <div>
                <div>
                  <p className='f3 bb b--white blue w-25 pa1 mt4 '>Recommendations</p>
                  <Carousel/>
                </div>
                <div className='weekly'>
                  <p className='f3 bb b--white blue w-25 pa1 mt4'>Weekly tops</p>
                  <WeeklyTop />
                </div>
                </div>
                ):
                <section class="tc pa3">
                  <p className='f3 bb b--white blue w-25 pa1 mt2'>Top Result</p>
                  <article class="hide-child relative ba b--black-20 mw5 ml3">
                    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/techno-triangle-album-cover-flyer-template-2f2a9d4851c7de5f4f2362d3352f42fc.jpg?ts=1477673828" class="db w-75 center" alt="Top Result" />
                    <div class="pa2 bt b--black-20">
                      <p class="f5 white mv1">{this.state.song.title}</p>
                      { this.state.play===false?
                        <p class="link pointer tc ph3 ma2 pa1 db bg-animate bg-blue hover-bg-light-blue white f6 br2" onClick={this.onPlayClick}>> PLAY</p>
                        :<p class="link pointer tc ph3 ma2 pa1 db bg-animate bg-blue hover-bg-light-blue white f6 br2" onClick={this.onPauseClick}>|| PAUSE</p>
                      }
                      <p class="link tc ph3 ma2 pa1 db bg-animate bg-blue hover-bg-light-blue white f6 br2" href="#">+ Add to playlist</p>
                    </div>
                    <p class="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</p>
                  </article>
                  <div>
                  <p className='f3 bb b--white blue w-25 pa1 mt4 '>Recommendations</p>
                  <Carousel/>
                  </div>
                </section>
              }
            </div>
          </div>
          )
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
