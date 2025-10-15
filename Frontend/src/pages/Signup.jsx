import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div>Signup</div>
      <div>
        <form>
          <label>Name</label>
          <input 
            type='text' 
            placeholder='Name' 
            required 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />

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

export default Signup;
