import React, {useState} from 'react'
import API from './api/axios'


const Register = () => {
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await API.post('/users/register', {name, email, password});
            console.log('Registered:', res.data);
            alert('User registered successfully');
        }catch(err){
            console.error(err.response.data);
            alert('Registration failed');
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
