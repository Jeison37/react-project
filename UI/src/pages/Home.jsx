import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useRef } from "react";
import UserInfo from "../components/UserInfo";
import ThemeToggle from "../components/ThemeToggle";

// eslint-disable-next-line no-unused-vars
const userRole = "0"
const adminRole = "1"

const Home = () => {
  const session = localStorage.getItem("session");
  const user = JSON.parse(localStorage.getItem(session));
  const navigate = useNavigate();

  const name = useRef()
  const lastname = useRef()

  const email = useRef()
  const role = useRef()



  return (
    <>
      <main className="h-screen flex flex-col">
        <nav className="min-h-16 flex ">
          <div className="left-side w-1/2 sm:w-60 flex justify-center items-center bg-[#2f32f8] ">
            <h1 className="text-3xl">LOGO</h1>
          </div>

          <div  className="right-side items-center px-5 flex justify-end flex-grow bg-[#2f68f8]">
            <div className="md:flex hidden">
              <div className="flex items-center gap-4">
                <ThemeToggle />
                Hi {user.name + " " + user.lastname}
                <button
                  onClick={() => {
                    localStorage.setItem("session", "")
                    navigate("/login");
                  }}
                  className="rounded-xl px-3 py-1 bg-red-500"
                >
                  Log out
                </button>
              </div>
            </div>

            <button className="menu-btn rounded-xl text-xl px-3 py-1 md:hidden block">Menu</button>
          </div>
        </nav>


        <div className="flex-grow px-4 py-4 dark:text-white transition text-black bg-[#f2f5fa] dark:bg-gray-900">
            <h2 className="text-2xl font-bold">Account settings</h2>

            <div className="">
                          <div className="data block lg:flex mt-6 gap-10">

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.name} refe={name}  type="text" name="name" id="name" />

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.lastname} refe={lastname}
                type="text" name="lastname"
                id="lastname"
              />
                

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.email} refe={email} id="email" name="email"/>

              <Input readonly={true} wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.role ? "Admin" : "User"} refe={role} id="role" name="role"/>


                  
            </div>

            <button onClick={
              ()=>{
                localStorage.setItem(
                  email.current.value,
                  `{"name":"${name.current.value}",
                  "lastname":"${lastname.current.value}",
                  "email":"${email.current.value}",
                  "role":0,
                  "active":true
                  }`

                )
                
                location.reload()
                
              }
            } className="update-btn rounded-xl text-xl px-3 py-1 text-white bg-[#2f68f8]">
              Update account
            </button>


            <h2 className="text-2xl mt-5 font-bold">Accounts</h2>

            {
              Object.keys(localStorage).map( key =>{
                if (user.role == adminRole){
                  let stop = true
                  if (stop && ( key !== "session") && (key !== "theme") ) {

                    if (key == "length") stop = false
                    else {

                      const item = localStorage.getItem(key);
                      
                      const row = JSON.parse(item)
                      
                      return (
                        <UserInfo user={row} key={row} />
                      )
                    }
                  }
                }
              })
            }
            </div>


        </div>
      </main>
    </>
  );
};

export default Home;
