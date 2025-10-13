import React from 'react'

const Login = () => {
  return (
    <>
    <div>Login page</div>
    <div>
      <form>
        <label>Phone Number</label>
        <input type='Number' placeholder='Phone Number' required = "true" />
        <label>Email</label>
        <input type='text' placeholder='Email' required = "true" />
        <label>Login</label>
        <input type='text' placeholder='Login' required = "true" />
        <label>Password</label>
        <input type='text' placeholder='Password' required = "true" />
        <button>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Login;