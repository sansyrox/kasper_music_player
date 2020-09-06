import React, { Component } from 'react';
import Carousel from '../components/carousel/carousel';
import WeeklyTop from '../components/weeklytop/weeklytop';
import '../index.css';

const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

class LandingPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        recommendations: ''
      }
      // this.getRecs();
    }

		 getRecs = async () => {
			 try {
				 const req2= await fetch(`${BASE_URL}recommend?vid=kJQP7kiw5Fk`)
				 const res2= await req2.json() 
				 console.log("Hello World",res2)
				 this.setState({recommendations:res2.items})
			 } catch (error) {
				 console.log(error); 
			 }
      
		 }

    render() {
        return (
            <div>
                <div>
                  <p className='f3 bb b--white w-25 pa1 mt4 red-heading-color'>Recommendations</p>
                  <Carousel onSetInput={this.props.onSetInput} toggleSearch={this.props.toggleSearch} data={this.state.recommendations}/>
                </div>
                <div className='weekly'>
                  <p className='f3 bb b--white w-25 pa1 mt4 red-heading-color'>Weekly tops</p>
                  <WeeklyTop onSetInput={this.props.onSetInput} toggleSearch={this.props.toggleSearch} />
                </div>
            </div>
        );
    }
}

export default LandingPage;
