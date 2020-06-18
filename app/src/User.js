import React from 'react';

function User(props) {
    const {
        first_name,
        last_name,
        name,
        email, 

    }
      = props.details;

    return (
        <div className="user-container">
            <h4>Name: {(first_name + ' ' + last_name) || {name}} </h4>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;
