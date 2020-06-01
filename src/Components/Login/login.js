import React from 'react';

const Login = ({nameChange, onSignin}) => {
	return (
		<div>
		<div className='center w-100 pv1 o-90 tc shadow-5 bg-orange'>
			<h1 className='courier'> CLONE IT</h1>
		</div>

		<article className="br4 ba black mv5 w-100 w-50-m w-25-l mw6 center shadow-5 courier">
		<main className="pa4 black-80 tc">
	  <div className="measure center">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <legend className="f2 fw6 ph0 mh0">Log In</legend>
	      <div className="mt3">
	        <label className="db fw6 f6 lh-copy" htmlFor="email-address">Name</label>
	        <input className="pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-90" 
	        type="Name" name="name"  id="Name" onChange={nameChange}/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	        <input className="pa2 input-reset ba bg-transparent hover-bg-orange hover-white w-80" 
	        type="password" name="password"  id="password"/>
	      </div>
	    </fieldset>
	    <div className="">
	      <input onClick={onSignin}
	       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
	       type="submit" value="Log in"/>
	    </div>
	  </div>
		</main>
		</article>
		</div>
	);
}

export default Login;