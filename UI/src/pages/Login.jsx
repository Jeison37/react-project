import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useRef, useState } from "react";

import { login } from "../hooks/useCrypto"

const Login = () => {
  
  const [error, setError] = useState("")

  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()

  return (
    <>
      <main className="flex  px-10 text-black justify-center items-center h-screen w-full bg-[linear-gradient(#d53d8f,#134fc4)]">
        <form action="" className="px-10 rounded-md max-w-lg w-full  bg-white">
          <h1 className="text-center md:py-14 py-10 text-3xl font-bold">
            Login
          </h1>

          <span className="text-red-600">{error}</span>
          <Input refe={email} id="email" name="email"/>

          <Input refe={password} id="password" name="password"/>

          <div className="py-8">

          <button onClick={
            e =>{
              e.preventDefault();
              
              const account = localStorage.getItem(email.current.value)
              const user = JSON.parse(account)
              
              if (account && user?.active){
                console.log('user :>> ', user);

                if (login(password.current.value, user.password)){
                  localStorage.setItem("session",email.current.value)
                  navigate("/")
                } else setError("Wrong account or password 2")

              } else setError("Wrong account or password 1")

            }
          } className="w-full mb-3 h-10 text-white bg-[#cd3c89]">Login</button>

          <span>Don&apos;t have an accout? <Link to="/signup" className="text-purple-400">Signup</Link> </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
