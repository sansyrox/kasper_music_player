//Sidebar Component to navigate between different screens
import React,{Component} from 'react';
import './sidemenu.css';
import kasper_logo from '../../img/kasper_logo.png';
import { browserHistory, Link } from 'react-router'




class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  nextPath = (path)  => {
    browserHistory.push(path)  
    window.location.reload(false);
  };

  render(){
    return (
      <ul className='side-menu-container'>
        <div className="tc pa4">
          <img src={kasper_logo} className="logo" alt="avatar"/>
        </div>

        <div className="navs">
          <Link onClick={()=> this.nextPath('/new')} to={{
            pathname: '/new'
            }} className={this.props.title === 'Browse' ? 'active side-menu-item hover-bg-blue pa1 bb b-white bb b-white': 'side-menu-item hover-bg-blue pa1 bb b-white'}>Browse</Link>
          <Link onClick={()=> this.nextPath('/recent')} to={{
            pathname: '/recent',
            state: {
              recent: "true"
            }
          }}  className='side-menu-item hover-bg-blue pa1 bb b-white'>Recently Played</Link>
        </div>
        
        {/* <Link className='side-menu-item  hover-bg-blue pa1 bb b-white'>Your Playlist</li> */}
        <p onClick={() => this.props.onRouteChange('signout')} className='f3 link signout-color pointer mt6'>Sign Out </p>
      </ul>
    );
  }
}

export default SideMenu;
