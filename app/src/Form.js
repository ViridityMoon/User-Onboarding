import React from 'react';

function Form(props) {
  const {
    onInputChange,
    onCheckboxChange,
    onSubmit,
    values,
  } = props;

  return (
    <div className="form-container">
      <div className='form-input'>
          <h3>Information</h3>
          <label>Name
              <input name='name' type='text' value={values.name} onChange={onInputChange} maxLength='40'/>
          </label>
          <label>Email
              <input name='email' type='text' value={values.email} onChange={onInputChange}/>
          </label>
          <label>Password
              <input name='password' type='password' value={values.password} onChange={onInputChange}/>
          </label>
          <label>Terms of Service
              <input name='ToS' type='checkbox' checked={values.tos} onChange={onCheckboxChange}/>
          </label>
          <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
