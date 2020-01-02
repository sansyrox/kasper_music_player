import React from 'react';
import './SignIn.css';
import firebase from "firebase";
import Cookies from 'universal-cookie';

class SignIn extends React.Component {
  constructor(){
    super();
    this.state={
      signUpForm: {
        name: "",
        email: "",
        password: ""
      },
      signInForm: {
          email: "",
          password: ""
      }
      ,
      error: null,
      isActive: ""
    }

  }


  deactivate_right_panel =()=> {
    this.setState({isActive: ""})

    console.log(this.state);
    
  }

  activate_right_panel=()=> {
    this.setState({isActive: "right-panel-active"})
    console.log(this.state);
  }

 

  onSignUpEmailChange = (event) => {
    let signUpForm = {...this.state.signUpForm}
    signUpForm["email"] = event.target.value
    this.setState({signUpForm});
  }

  onSignUpPasswordChange = (event) => {
    let signUpForm = {...this.state.signUpForm}
    signUpForm["password"] = event.target.value
    this.setState({signUpForm});
  }

  onSignUpNameChange = (event) => {
    let signUpForm = {...this.state.signUpForm}
    signUpForm["name"] = event.target.value
    this.setState({signUpForm});
  }

  onSignInEmailChange = (event) => {
    let signInForm = {...this.state.signInForm}
    signInForm["name"] = event.target.value
    this.setState({signInForm});
  }


  onSignInPasswordChange = (event) => {
    let signInForm = {...this.state.signInForm}
    signInForm["password"] = event.target.value
    this.setState({signInForm});
  }

  signUp = (event) => {
    event.preventDefault()
    firebase.auth()
        .createUserWithEmailAndPassword(this.state.signUpForm.email, this.state.signUpForm.password)
        .then(data => {
        data.user
            .updateProfile({
            displayName: this.state.signUpForm.name
            })
            .then(() => {
                // this.isActive=true;
                this.deactivate_right_panel()
            });

        })
        .catch(err => {
        this.error = err.message;
        });

    }

    login = (event) => {
      event.preventDefault()
      
      
      firebase.auth()
      .signInWithEmailAndPassword(this.state.signInForm.email, this.state.signInForm.password)
      .then(() => {
        console.log(this.state);
        const cookies = new Cookies();
        let expiringDate = new Date();
        expiringDate.setHours(expiringDate.getHours()+1)
        cookies.set('loggedIn', 'true', { path: '/' , expires: expiringDate});
        console.log(cookies.get('loggedIn'));
        window.location.reload(false);
      })
      .catch(err => {
      this.error = err.message;
      });
  }


  render() {  
    return (
      <div className="home">
        <div id="container" className= {"container " + this.state.isActive}>
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={this.signUp}>
          <h1>Create Account</h1>
            <span>Use your email for registration</span>
            <input type="text" 
                placeholder="Name"
                id="name"
                name="name"
                required
                autoFocus
                onChange={this.onEmailChange}
                v-model="signUpForm.name"
            />
            <input type="email" 
                placeholder="Email"
                name="email"
                required
                autoFocus
                v-model="signUpForm.email"
                />
            <input 
                type="password" 
                placeholder="Password"
                id="password"
                name="password"
                required
                v-model="signUpForm.password"
                />
            
            <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in-container">

        <form onSubmit={this.login} > 
        {/* Form on submit do that  */}
        {/* "login" */}
          <h1>Login</h1>
            <span>Use your email to login</span>
           
            <input type="email" 
                placeholder="Email"
                name="email"
                required
                autoFocus
                onChange={this.onSignInEmailChange}
                />
            <input 
                type="password" 
                placeholder="Password"
                id="password"
                name="password"
                required
                onChange={this.onSignInPasswordChange}
                />
            <button>Sign In</button>
      </form>

          </div>
          <div className="overlay-container">
              <div className="overlay">
                  <div className="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>
                          To keep connected with us please login with your personal info
                      </p>
                      <button className="ghost" id="signIn" onClick={this.deactivate_right_panel}>Sign In</button>
                  </div>
                  <div className="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>Enter your personal details and start journey with us</p>
                      <button className="ghost" id="signUp" onClick={this.activate_right_panel}>Sign Up</button>
                  </div>
              </div>
          </div>
          {/* <div>{{error}}</div> */}
        </div>
      </div>
    );
  }  
}

export default SignIn;