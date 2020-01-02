import React, { Component } from 'react';
import Recommendations from '../components/recommendations/recommendations';
import AudioPlayer from '../components/audioplayer/audioplayer';
import '../index.css';

const BASE_URL = 'http://localhost:7070/';

class MusicPlayerPage extends Component {

    constructor(props) {
        super(props);
        this.state={URLLink:''};
        // this.state.url = '';
    }
    

    onPlayClick = async () => {
        const req= await fetch(`${BASE_URL}play?vid=${this.props.song.id}`)
        const res= await req.json() 
        // console.log(res);
        this.setState({play:!this.state.play})
        // console.log(this.state);
        this.setState({URLLink:res.url})
        // console.log(this.props.recommendations)
      }
    
      componentDidMount(){
          this.onPlayClick()
      }
      
    
      onPauseClick = () => {
        fetch(`${BASE_URL}pause`)
        this.setState({play:!this.state.play})
      }

    render() {
        // console.log(this.props.recommendations)
        return (
            <div>
                <section className="tc pa3">
                <p className='f3 bb b--blue red-heading-color w-25 pa1 mt2'>Top Result</p>
                  <article className="hide-child relative ba b--black-20 mw5 ml3">
                    <img src={`https://img.youtube.com/vi/${this.props.song.id}/0.jpg`} className="db w-75 center" alt="Top Result" />
                    <div className="pa2 bt b--black-20">
                      <p className="f5 white mv1">{this.props.song.title}</p>
                      { this.state.play!==false?
                        <p className="link pointer tc ph3 ma2 pa1 db bg-animate buttonColor f6 br2" onClick={this.onPlayClick}>> PLAY</p>
                        :<p className="link pointer tc ph3 ma2 pa1 db bg-animate buttonColor f6 br2" onClick={this.onPauseClick}>|| PAUSE</p>
                      }
                      <p className="link tc ph3 ma2 pa1 db bg-animate buttonColor f6 br2" href="#">+ Add to playlist</p>
                    </div>
                    <p className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="#">×</p>
                  </article>
                  <div>
                  <p className='f3 bb b--blue red-heading-color w-25 pa1 mt4 '>Recommendations</p>
                  <Recommendations recommendations={this.props.recommendations}/>
                  </div>
                  {/* Add autoplay functionality */}
                  <AudioPlayer audioURL={this.state.URLLink}  />
                  </section>
            </div>
        );
    }
}

export default MusicPlayerPage;