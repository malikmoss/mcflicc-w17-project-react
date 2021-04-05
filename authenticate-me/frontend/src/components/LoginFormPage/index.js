import React, {useState} from 'react';
import * as sessionActions from '../../store/session';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './LoginForm.css'
import background from '../../images/background.JPEG'

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/explore" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }

    return (
      <div className="login-page">
        {sessionUser}

        <div className="login-container">
          <div className="header-container">
            Log In
          </div>

        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>

            <div className="email-container">
            {/* <label className="email-label">Username or Email</label> */}
              <div>
              <input className='user-input'
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                placeholder="Username/E-mail"
                required
              /> 
            </div>
            </div>

            <div className='password-container'>
            {/* <label className='password-label'>Password</label> */}
                <div>
              <input className= 'password-input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder= "Password"
                required
                />
            </div>
            </div>

            <button className="login-button" type="submit">Log In</button>
            <button className="demo-user"  type="submit">Demo User</button>
        </form>
      </div>
    </div>
    );
}

export default LoginFormPage;

