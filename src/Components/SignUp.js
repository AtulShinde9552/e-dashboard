import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const auth = localStorage.getItem('adduser')
    if (auth) {
      navigate('/')
    }
    // eslint-disable-next-line 
  }, [])

  const HandleForm = (e) => {
    e.preventDefault()
    
  }

  const sumbitform = async () => {
    console.log(name, email, password)
    let result = await fetch('http://localhost:5000/adduser',({
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
        
      }

    }))
    result = await result.json()
    console.log(result);
    localStorage.setItem('adduser', JSON.stringify(result))
    navigate('/')
  }

  return (
    <div className='login'>
      <h1>Sign-Up</h1>
      <form onSubmit={HandleForm}>
        <input className='inputBox' type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
        <input className='inputBox' type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input className='inputBox' type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={sumbitform} className='appButton'>Register</button>
      </form>
    </div>
  )
}

export default SignUp