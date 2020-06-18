import React from 'react';

function Form(props) {
  const {
    onInputChange,
    onCheckboxChange,
    onSubmit,
    values,
    errors,
    disabled
  } = props;
  return (
    <div className="form-container">
      <div className='errors'>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
      </div>
      <div className='form-input'>
          <h3>Information</h3>
          <label> First Name
              <input name='first_name' type='text' value={values.first_name} onChange={onInputChange} maxLength='40'/>
          </label>
          <label> Last Name
              <input name='last_name' type='text' value={values.last_name} onChange={onInputChange} maxLength='40'/>
          </label>
          <label>Email
              <input name='email' type='text' value={values.email} onChange={onInputChange}/>
          </label>
          <label>Password
              <input name='password' type='password' value={values.password} onChange={onInputChange}/>
          </label>
          <label>Terms of Service
              <input name='tos' type='checkbox' checked={values.tos} onChange={onCheckboxChange}/>
          </label>
          <button onClick={onSubmit} disabled={disabled}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
