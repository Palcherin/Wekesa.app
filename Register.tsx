import React, { useState } from "react";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider,db } from "../../firebaseconfig";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user=auth.currentUser;
      console.log("Registered user:", userCredential.user);
      if(user){
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          // email: user.email,
          // name: user.displayName || "Anonymous",
          // password: password,
      });
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-green-400 text-white">
      <form onSubmit={handleRegister} className='p-10 shadow-lg rounded-lg bg-gray-900/50 flex flex-col gap-4 '>
        <h1>Register Page</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} className="block w-full rounded-md bg-white/5 px-3 py-1.5  text-base text-white/30 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="block w-full rounded-md bg-white/5 px-3  py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="block w-full rounded-md bg-white/5 px-3  py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        <button type="submit" className="mt-4 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-blue-500 shadow-sm hover:bg-indigo-500 m-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
        <a className="text-center" href="/login">Login</a>
      </form>
    </div>
  )
}

export default Register
