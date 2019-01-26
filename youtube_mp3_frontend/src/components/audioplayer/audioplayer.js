import React, { Component } from 'react';
import './audioPlayer.css';

class AudioPlayer extends Component {
    
    render() {
        return (
            <div>
                <audio className="audioPlayer" src={this.props.audioURL} controls="controls" />
            </div>
        );
    }
}

export default AudioPlayer;