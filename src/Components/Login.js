import React, { useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const signInResponse = await Auth.signIn(username, password);
      console.log('Sign in response: ', signInResponse);
    } catch (error) {
      console.error('Error in sign in: ', error);
    }
  };

    return(
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
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    )
}

export default Login