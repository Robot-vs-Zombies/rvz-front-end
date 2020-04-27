import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUp(props) {
    const [newUser, setNewUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log("new user info", newUser)
        e.preventDefault()
        axios.post('https://lambda-mud-test.herokuapp.com/api/login', newUser)
        .then(res => {
            localStorage.setItem('token', res.data.key);
            axios.post("https://lambda-mud-test.herokuapp.com/api/login", 
            {email: newUser.email, password: newUser.password})
            .then(res => {
                localStorage.setItem('token', res.data.key);
                localStorage.setItem('email', newUser.email)
                props.history.push('/dashboard');
            })
            .catch(err => {
                console.log(err)
            })  
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>email
           <input
                onChange={handleChange}
                id = 'email'
                type='text'
                name='email'
                />
           </label>
           <label htmlFor='password'>
               <input
                    id='password'
                    type='password'
                    name='password'
                />
                    
            </label>
            <button>Register</button>
        </form>
    )
}