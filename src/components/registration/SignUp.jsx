import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function SignUp(props) {
    const [newUser, setNewUser] = useState({
        username: '',
        password1: '',
        password2: ''
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
        axios.post('https://lambda-mud-test.herokuapp.com/api/registration/', newUser)
        .then(res => {
            localStorage.setItem('token', res.data.key);
            console.log('register info:', res.data)
            axios.post("https://lambda-mud-test.herokuapp.com/api/login/", 
            {username: newUser.username, password: newUser.password1, password2: newUser.password2})
            .then(res => {
                localStorage.setItem('token', res.data.key);
                localStorage.setItem('username', newUser.username)
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
            <label htmlFor='username'>
           <input
                onChange={handleChange}
                id = 'username'
                type='text'
                name='username'
                />
           </label>
           <label htmlFor='password1'>
               <input
                    onChange={handleChange}
                    id='password1'
                    type='password'
                    name='password1'
                    
                />
                    
            </label>
            <label htmlFor='password2'>
               <input
                    onChange={handleChange}
                    id='password2'
                    type='password'
                    name='password2'   
                />
                    
            </label>
            <button>Register</button>
        </form>
    )
}