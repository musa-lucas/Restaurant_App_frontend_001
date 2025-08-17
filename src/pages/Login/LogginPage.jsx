import React from 'react'
import './LoginPage.css'

function LogginPage() {
  return (
    <div className='login-container'>
<div className="login-form-container">
<div>
    <label>email</label>
    <input type="email" placeholder='Enter your email here'/>
    </div>
    <div>
    <label>password</label>
    <input type="password" placeholder='Enter your password here'/>
    </div>
    <br />
    <div className='login-btn-container'>
 <button>login</button>
    </div>
    <div className='no-acc-container'>
      <h4>
        Don't have an account ? <link to={'/Signup'} >Signup now!</link>
      </h4>
    </div>
</div>
    </div>
  )
}

export default LogginPage