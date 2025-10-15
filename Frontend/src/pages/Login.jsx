import React, { useState } from 'react'

const Login = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>Login Page</div>
      <div>
        <form>
          <label>Phone Number</label>
          <input 
            type='number' 
            placeholder='Phone Number' 
            required 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />

          <label>Email</label>
          <input 
            type='email' 
            placeholder='Email' 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />

          <label>Login</label>
          <input 
            type='text' 
            placeholder='Login' 
            required 
            value={login} 
            onChange={(e) => setLogin(e.target.value)} 
          />

          <label>Password</label>
          <input 
            type='password' 
            placeholder='Password' 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
