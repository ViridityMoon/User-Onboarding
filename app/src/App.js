import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './Form';

const initialUser = [{
  name: 'name',
  email: 'email@email.com',
  password: '1234567890',
  tos: true,
}]

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
};



function App() {

  const [users, setUsers] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const onInputChange = evt => {
    
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)

      .validate(value)

      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    setFormValues({
      ...formValues,
      tos: {
        ...formValues.tos,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      tos: formValues.tos,
    }
  }
  

  return (
    <div className="App">
      <header><h1>Users</h1></header>
      <Form values = {formValues} onInputChange = {onInputChange} onSubmit = {onSubmit}/>

    </div>
  );
}


export default App;
