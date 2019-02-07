import React, { Component } from 'react';
import Carousel from './components/carousel/carousel';
import WeeklyTop from './components/weeklytop/weeklytop';
import './index.css';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div>
                  <p className='f3 bb b--white w-25 pa1 mt4 red-heading-color'>Recommendations</p>
                  <Carousel/>
                </div>
                <div className='weekly'>
                  <p className='f3 bb b--white w-25 pa1 mt4 red-heading-color'>Weekly tops</p>
                  <WeeklyTop />
                </div>
            </div>
        );
    }
}

export default LandingPage;