import React from 'react';


class SignIn extends React.Component {
  constructor(){
    super();
    this.state={
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail:event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword:event.target.value});
  }

  
  onSubmitSignIn = () => {
    //for(var i=0;i<database.length;i++)
    //{
        if(this.state.signInEmail==="admin" && this.state.signInPassword==="admin")
        {
            this.props.loadUser({email:this.state.email});
            this.props.onRouteChange('home');
        }  
        else
        {
            alert("Wrong login credentials! Please try again");
        }  
    //}
  }
  render() {  
    return (
      <article className="br3 ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center b--blue">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0 blue">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba b--blue br-pill bg-transparent hover-bg-light-blue hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                    />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba b--blue br-pill bg-transparent hover-bg-light-blue hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                    />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={this.onSubmitSignIn}
                  className="br-pill ph3 pv2 white input-reset ba b--blue bg-blue grow pointer f6 dib"
                  type="submit"
                  value="Sign in"/>
              </div>
              <div className="lh-copy mt3">
                <p onClick={() => this.props.onRouteChange('register')} className="f6 link dim white db pointer">Register</p>
              </div>
            </div>      
          </main>
        </article>
      );
  }  
}

export default SignIn;