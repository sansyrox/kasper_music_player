import React from 'react';

class Register extends React.Component {
  
  constructor(){
    super();
    this.state={
      email: '',
      password: '',
      name:''
    }
  }

  onEmailChange = (event) => {
    this.setState({email:event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password:event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name:event.target.value});
  }

  onSubmitSignIn = () => {
    this.props.onRouteChange('home');
  }

  render() {
    return (
      <article className="br3 b--blue ba mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 blue">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                <input
                  className="pa2 br-pill input-reset ba b--blue bg-transparent hover-bg-dark-blue hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                <input
                  className="pa2 br-pill input-reset ba b--blue bg-transparent hover-bg-dark-blue hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                <input
                  className="br-pill pa2 input-reset ba b--blue bg-transparent hover-bg-dark-blue hover-white w-100"
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
                className="br-pill ph3 pv2 input-reset ba b--blue bg-blue grow pointer f6 dib white"
                type="submit"
                value="Register"/>
            </div>
          </div>      
        </main>
      </article>
    );
  }  
}

export default Register;