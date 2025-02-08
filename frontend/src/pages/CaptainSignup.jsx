import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});
    const handleSubmit = (e) => {
      e.preventDefault();
      setUserData({
        fullName:{
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password,
      })
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      console.log('submitted');
    };
  
  return (
    <div className="p-7 h-screen flex justify-between flex-col ">
        <div>
          <img
            className="w-20 mb-3"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >   <h3 className="text-lg w-full font-medium mb-2">Whats our Captain's name</h3>
          <div className="flex mb-5 gap-4">
          <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
            <h3 className="text-lg font-medium mb-2">Whats our Captain's Email</h3>
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
    
            <h3 className=" text-base font-medium mb-2">Enter password</h3>
    
            <input
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
    
            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2   w-full text-lg placeholder:text-base">
              Login
            </button>
          </form>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className='text-[10px] leading-tight'>
           This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'> Terms of Service apply</span>.
          </p>
        </div>
      </div>
  )
}

export default CaptainSignup