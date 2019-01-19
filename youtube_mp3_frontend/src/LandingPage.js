import React, { Component } from 'react';
import Carousel from './components/carousel/carousel';
import WeeklyTop from './components/weeklytop/weeklytop';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <div>
                  <p className='f3 bb b--white blue w-25 pa1 mt4 '>Recommendations</p>
                  <Carousel/>
                </div>
                <div className='weekly'>
                  <p className='f3 bb b--white blue w-25 pa1 mt4'>Weekly tops</p>
                  <WeeklyTop />
                </div>
            </div>
        );
    }
}

export default LandingPage;