import React, {useState} from 'react';
import "./Login.css";
import {Link, useNavigate} from 'react-router-dom';
import {auth} from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth 
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        auth 
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message));
    }

  return (
    <div className="login">
    <div className="login__container">
        <h1>Sign In</h1>
        <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

            <h5>Password</h5>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className="login-signInButton">Sign In</button>
        </form>

        <button onClick={register}  className="login-registerButton">Create your Ebuy Account</button>
    
    </div>
    </div>
  )
}

export default Login