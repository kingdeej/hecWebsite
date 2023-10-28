import React from 'react'

export default function LoginPage() {
  return (
    <main className="login-page | page-block-padding flex-center flex-column">
        <h1 className='primary-header'>LoginPage</h1>
        
        <div className="login-page-wrapper | page-inline-padding space-between flex-column">
            <div className="top-wrapper flex-column">
                <div className="inputs-wrapper | flex-column">
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                </div>
                <div className='flex'>
                    <input type="checkbox" name="show-password" id="show-password" />
                     <p>show/hide password</p>
                </div>
            </div>
            <div className="bottom-wrapper flex-column">
                <div className='flex'>
                    <input type="checkbox" name="remember-me" id="remember-me" />
                     <p>Remember me</p>
                </div>
                <button className="button primary-button">Login</button>
                <p>Don't have an account? <span>Sign Up</span> </p>
            </div>
        </div>
    </main>
  )
}
