import React from 'react'

const Navigation = (props) => {
    if(props.isSignedIn){
        return (
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
                <p onClick={() => props.onRouteChange('signout')} className='f3 link dim blue pa3 pointer'>Sign Out </p>
            </nav>

        );
     } else {
        return (
            <nav style={{display:'flex',justifyContent:'center'}}>
                <p className='f3 link dim white pa3 pointer system calisto'> </p>
            </nav>
        );      
     }  
}

export default Navigation;