//Sidebar Component to navigate between different screens
import React,{Component} from 'react';
import './sidemenu.css';

const handleClick = (name)  => {
    
};

class SideMenu extends Component {
  render(){
    return (
      <ul className='side-menu-container'>
        <div class="tc pa4">
          <img src="http://chittagongit.com//images/m-icon/m-icon-7.jpg" class="br-100 pa1 ba b--black-10 h3 w3" alt="avatar"/>
        </div>
        <li onClick={ handleClick } className={this.props.title === 'Browse' ? 'active side-menu-item hover-bg-blue pa1 bb b-white bb b-white': 'side-menu-item hover-bg-blue pa1 bb b-white'}>Browse</li>
        <li className='side-menu-item hover-bg-blue pa1 bb b-white'>Recently Played</li>
        <li className='side-menu-item  hover-bg-blue pa1 bb b-white'>Your Playlist</li>
        <p onClick={() => this.props.onRouteChange('signout')} className='f3 link dim blue pointer mt6'>Sign Out </p>
      </ul>
    );
  }
}

export default SideMenu;
