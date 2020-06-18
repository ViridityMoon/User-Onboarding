import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Form from './Form';
import User from './User';

import formSchema from './validation/formSchema';
import * as Yup from 'yup';

const initialUser = [{
  first_name: 'name',
  last_name: 'name',
  email: 'email@email.com',
  password: '1234567890',
  tos: true,
}];

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false,
};

const initialFormErrors = {
  first_name: '',
  last_name: '',
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
  };

  const onCheckboxChange = evt => {
    setFormValues({
      ...formValues,
      tos: !formValues.tos
    })
  };
  
  
  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(response => {
        setUsers([response.data, ...users]);
        debugger
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const onSubmit = evt => {
    evt.preventDefault();

    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    };

    setUsers(props => [newUser, ...props]);

    setFormValues(initialFormValues);

    postUsers(newUser);
  };

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {

    formSchema.isValid(formValues).then(props => {
      setDisabled(!props)
    })
  }, [formValues])

  let count = -1

  return (
    <div className="App">
      <header><h1>Users</h1></header>
      <Form values = {formValues} disabled={disabled} onInputChange = {onInputChange} onCheckboxChange = {onCheckboxChange} onSubmit = {onSubmit} errors={formErrors}/>
      {users.map(user => {
        count ++
        return (
          <User details={user} key={count} />
      )})}
    </div>
  );
};


export default App;
