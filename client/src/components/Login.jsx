import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='body'>
        <div class="main">  	
            <input type="checkbox" id="chk" aria-hidden="true"/>
            <div class="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Sign up</label>
                    <input className='input' type="text" name="name" placeholder="Full Name" required=""/>
                    <input className='input' type="email" name="email" placeholder="Email" required=""/>
                    <input className='input' type="text" name="city" placeholder="City" required=""/>
                    <input className='input' type="password" name="password" placeholder="Password" required=""/>
                    <button className='button'>Sign up</button>
                </form>
            </div>
            <div class="login">
                <form>
                    <label htmlFor="chk" aria-hidden="true">Login</label>
                    <input className='input' type="email" name="email" placeholder="Email" required=""/>
                    <input className='input' type="password" name="password" placeholder="Password" required=""/>
                    <button className='button'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
