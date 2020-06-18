import React from 'react';

function Form(props) {
  return (
    <div className="form-container">
      <div className='form-input'>
          <h3>Information</h3>
          <label>Name
              <input name='name' type='text'/>
          </label>
          <label>Email
              <input name='email' type='text'/>
          </label>
          <label>Password
              <input name='password' type='password'/>
          </label>
          <label>Terms of Service
              <input name='ToS' type='checkbox'/>
          </label>
          <button>Submit</button>
      </div>
    </div>
  );
}

export default Form;
