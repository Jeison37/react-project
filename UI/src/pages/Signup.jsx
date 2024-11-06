import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useRef, useState } from "react";
import { encrypt } from "../hooks/useCrypto"

const Signup = () => {

const styles= {
    midSizeInp : "md:w-1/2 w-full",
    }

  const [error, setError] = useState("")

  const name = useRef()
  const lastname = useRef()

  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()

  return (
    <>
      <main className="flex  px-10 text-black justify-center items-center h-screen w-full bg-[linear-gradient(#d53d8f,#134fc4)]">
        <form   className="px-10 rounded-md max-w-lg w-full  bg-white">
          <h1 className="text-center md:py-14 py-10 text-3xl font-bold">
            Signup
          </h1>
   
          <span className="text-red-600">{error}</span>

          <div className="md:flex gap-10 justify-between">
              <Input refe={name} wide={styles.midSizeInp} type="text" name="name" id="name" />

              <Input refe={lastname}
                wide={styles.midSizeInp} type="text" name="lastname"
                id="lastname"
              />
            
          </div>

          <Input refe={email} id="email" name="email"/>

          <Input refe={password} onChange={()=> console.log('password.current :>> ', password.current)} id="password" name="password"/>

          <div className="py-8">


          <button onClick={
            e =>{
              e.preventDefault();
              // const name = name.current.value
              // const lastname = lastname.current.value
              // const password = password.current.value

              // const user = {name,lastname, password}
              if (!localStorage.getItem(email.current.value)){

                
                localStorage.setItem(
                  email.current.value,
                  `{"name":"${name.current.value}",
                  "lastname":"${lastname.current.value}",
                  "password":"${encrypt(password.current.value)}",
                  "email":"${email.current.value}",
                  "role":0,
                  "active":true
                  }`

                )
                localStorage.setItem("session",email.current.value)
                navigate("/")
              } else setError("User already exists")
              


            }
          } className="w-full mb-3 h-10 text-white bg-[#cd3c89]">Signup</button>

          <span>Have an accout? <Link to="/login" className="text-bold text-purple-400">Login</Link> </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
