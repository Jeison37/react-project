import { useRef } from "react";
import Input from "./Input";

const UserInfo = ({user }) => {

    const name = useRef()
    const lastname = useRef()
  
    const email = useRef()
    const role = useRef()
    const active = useRef()

    return ( 
        <>
                    <div className="">
                          <div className="data block lg:flex mt-6 gap-10">

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.name} refe={name}  type="text" name="name" id="name" />

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.lastname} refe={lastname}
                type="text" name="lastname"
                id="lastname"
              />
                

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.email} refe={email} id="email" name="email"/>

              <Input wide="flex lg:block justify-between" inpWide="w-64" inpValue={user.role ? "Admin" : "User"} refe={role} id="role" name="role"/>

              <Input wide="flex lg:block justify-between" inpWide="w-20" inpValue={user.active} refe={active} id="active" name="active"/>

              




                  
            </div>

            <button onClick={
              ()=>{
                localStorage.setItem(
                  email.current.value,
                  `{"name":"${name.current.value}",
                  "lastname":"${lastname.current.value}",
                  "email":"${email.current.value}",
                  "role":0,
                  "active":true,
                  "password": ${user.password}
                  }`

                )
                
                location.reload()
                
              }
            } className="update-btn rounded-xl text-xl px-3 py-1 text-white bg-[#2f68f8]">
              Update account
            </button>
            </div>
        </>
     );
}
 
export default UserInfo;