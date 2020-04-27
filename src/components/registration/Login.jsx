import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Login(props) {
   const [user, setUsers] = useState({
    email: '',
    password: ''
   })

    const handleChange = (e) => {
    setUsers({
        ...user, [e.target.name]: e.target.value
    })
}

    const handleSubmit = () => {
     axios
     .post("https://lambda-mud-test.herokuapp.com/api/login")
     .then(res => {
         console.log(res)
        localStorage.setItem('token', res.data.key);
        localStorage.setItem('email', user.email)
        props.history.push('/dashboard');
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
                value={user.email}
                />
           </label>
           <label htmlFor='password'>
               <input
                    id='password'
                    type='password'
                    name='password'
                    value={user.password}
                />
                    
            </label>
            <button>Login</button>
       </form>
    )
}