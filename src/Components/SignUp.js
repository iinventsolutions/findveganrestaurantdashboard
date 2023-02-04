import React, { useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handleSignUp = async () => {
      try {
        const signUpResponse = await Auth.signUp({
          username,
          password,
          attributes: {
            email,
            // phone_number: phoneNumber
          }
        });
        console.log('Sign up response: ', signUpResponse);
      } catch (error) {
        console.error('Error in sign up: ', error);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <button onClick={handleSignUp}>Sign Up</button>
      </div>

      
    )
}

export default SignUp