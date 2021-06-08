import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/explore" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-page">
    <div className="signup-container">
      <div className="header-container">
        Create Account
      </div>

    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>

      <div className="email-container">
            {/* <label className="email-label">Email</label> */}
              <div>
              <input className="email-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder = "E-mail"
                required
              /> 
            </div>
            </div>

      <div className="username-container">
      {/* <label className='username-label'>Username:</label> */}
      <div>
        <input className="user-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        </div>
        </div>
      
      <div className="password-container">
      {/* <label className='password-label'>Password:</label> */}
      <div>
        <input className ="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      </div>

      <div className='confirmpw-container'>
      {/* <label className='confirmpw-label'>Confirm Password:</label> */}
      <div>
        <input className="confirm-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        </div>
        </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default SignupFormPage;