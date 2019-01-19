import React, { Component } from 'react';

class AudioPlayer extends Component {
    
    render() {
        return (
            <div>
                <audio src={this.props.audioURL} controls="controls" />
            </div>
        );
    }
}

export default AudioPlayer;