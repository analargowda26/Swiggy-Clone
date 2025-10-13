import React from 'react'

const Signup = () => {
  return (
    <>
    <div>Signup </div>
    <div>
      <form>
        <label>Name</label>
        <input type='text' placeholder='name' required = "true" />
        <label>Phone Number</label>
        <input type='Number' placeholder='Phone Number' required = "true" />
        <label>Email</label>
        <input type='text' placeholder='Email' required = "true" />
        <label>Password</label>
        <input type='text' placeholder='Password' required = "true" />
        <button>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Signup