import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-green-400 text-white">
      <form onSubmit={submitHandler} className='p-10 shadow-lg rounded-lg bg-gray-900/50 flex flex-col gap-4 '>
        <h1>Login Page</h1>
        <input type="email" value={email} placeholder="Email" onChange={handleEmailChange}   className="block w-full rounded-md bg-white/5 px-3 py-1.5  text-base text-white/30 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        <input type="password" value={password} placeholder="Password" onChange={handlePasswordChange}   className="block w-full rounded-md bg-white/5 px-3  py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        <button type="submit" className="mt-4 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-blue-500 shadow-sm hover:bg-indigo-500 m-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
        <a className="text-center" onClick={() => navigate('/register')}>signUp</a>
      </form>
    </div>
  )
}

export default Login
