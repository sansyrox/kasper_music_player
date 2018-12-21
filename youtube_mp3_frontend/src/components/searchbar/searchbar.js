//Searh Bar to search for a song
import React,{Component} from 'react'

class SearchBar extends Component {
    render(){
        if(this.props.isSignedIn){
            return (
                <div class="">
                    <fieldset class="cf bn mw7 mt2">
                        <div class="cf flex">
                            <input class="f6 f5-l input-reset bn fl blue bg-white pa3 lh-solid w-100 w-75-m w-80-l h3 br-pill" placeholder="Search for your song..." type="text" name="song" id="song"/>
                            <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-blue hover-bg-light-blue white pointer w-100 w-25-m w-20-l h3 br-pill ml2" type="submit" value="Search"/>
                        </div>
                    </fieldset>
                </div>
            );
        } 
        else {
            return (
                <nav style={{display:'flex',justifyContent:'center'}}>
                    <p className='f3 link dim white pa3 pointer system calisto'> </p>
                </nav>
            );      
        } 
    }   
}

export default SearchBar;