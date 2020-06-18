import React from 'react';

function User(props) {
    const {
        name,
        email, 
        password
    }
      = props.details;

    return (
        <div className="user-container">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default User;
