import React, { useEffect, useState } from 'react'
import {auth} from '../firebase/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import IsSignedIn from '../components/IsSignedIn'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState('password')
    const [remember, setRemember] = useState(false)
    const [step, setStep] = useState(0)
    const [redirect, setRedirect] = useState(false)
    const [loginErrorText, setLoginErrorText] = useState('Login')
    const navigate = useNavigate()

    if (auth?.currentUser?.displayName === 'admin') {
        if (redirect) {
            navigate('/admin')
        }
    }else if (redirect) {
        navigate('/promoter/add-event/0')
    }
    
    
    function handleSubmit(e) {
        e.preventDefault()
        if (step === 0) {
            signIn()
        }   else{
            signUp()
        }
    }

    const signUp = async (e) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
                .then((userCridential)=>{
                    const user = userCridential.user
                    setRedirect(true)
                })
                .catch((error)=>{
                    setLoginErrorText(error.code)
                    console.log(error.code);
                })
                
            
        } catch (error) {
            console.log(error);
        }
    }
    const signIn = async (e) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCridential)=>{
                    const user = userCridential.user
                    setRedirect(true)
                })
                .catch((error)=>{
                    setLoginErrorText(error.code)
                    console.log(error.code);
                })
                
            
        } catch (error) {
            console.log(error);
        }
    }
    const Buttons = ()=>{
        switch (step) {
            case 0:
                return(
                    <div>
                        <button type='submit' className="button primary-button">Login</button>
                        <p>Don't have an account? <span onClick={() => {setStep(1) }}>Sign Up</span> </p>
                    </div>
                )
            case 1:
                return(
                    <div>
                        <button type='submit' className="button primary-button">Sign Up</button>
                        <p>Don't have an account? <span onClick={() => {setStep(0) }}>Login</span> </p>
                    </div>
                )
            default:
                break;
        }
    }
  return (
    <main className="login-page | flex-center flex-column">
        <h1 className='primary-heading'>{loginErrorText}</h1>
        <form onSubmit={(e) => {handleSubmit(e) }} className="login-page-wrapper">
            <div className="top-wrapper | flow-2">
                <div className="inputs-wrapper | flow-2">
                    <input className='text-input' required onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" id="email" />
                    <input className='text-input' required onChange={(e) => {setPassword(e.target.value)}} type={showPassword} name="password" id="password" />
                </div>
                <div className='flex'>
                    <input type="checkbox" onChange={(e) => { showPassword === 'password' ? setShowPassword('text'): setShowPassword('password')}} name="show-password" id="show-password" />
                     <label htmlFor='show-password'>show/hide password</label>
                </div>
            </div>
            <div className="bottom-wrapper flow-2">
                <div className='flex'>
                    <input type="checkbox" onChange={(e) => { setRemember(e.target.value)}} name="remember-me" id="remember-me" />
                     <p>Remember me</p>
                </div>
                <Buttons />
            </div>
        </form>
    </main>
  )
}
