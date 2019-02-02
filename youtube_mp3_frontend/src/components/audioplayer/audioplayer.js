import React, { Component } from 'react';
import './audioPlayer.css';
import { PlayButton, Timer } from 'react-soundplayer/components';
import Progress from 'react-progressbar';
 
// it's just an alias for `withSoundCloudAudio` but makes code clearer
import { withCustomAudio } from 'react-soundplayer/addons';

const initialState = {
    playing: false,
    percentage:0,
    duration:0
  };

class AudioPlayer extends Component {

    constructor(){
        super();
        this.state = initialState;
        // this.playToggle();
    }

    playToggle = () =>{
        if(this.refs.audioPlayer.paused){
            this.refs.playButton.playing = false;
            this.refs.audioPlayer.play();
            this.setState({playing:true});
        } else {
            this.refs.playButton.playing = true;
            this.refs.audioPlayer.pause();
            this.setState({playing:false});
        }
    }

    timeUpdate = ()=>{
        let currentTime = this.refs.audioPlayer.currentTime;
        let duration = this.refs.audioPlayer.duration;
        this.setState({percentage:Math.floor(currentTime/duration)*100,duration:duration});
        setTimeout(1000);
    }
    render() {
        return (
            <div>
                <audio className="audioPlayer" id="mainAudioPlayer" ref="audioPlayer" onTimeUpdate={this.timeUpdate} src={this.props.audioURL}/>
                <PlayButton
                    ref="playButton"
                    className={"playButton"}
                    playing={false}
                    seeking={true}
                    onTogglePlay={this.playToggle} />
            </div>
        );
    }
}

export default AudioPlayer;