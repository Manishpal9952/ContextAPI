import React,{useContext, useState} from 'react'
import myContext from "../Context/MyContext"

function Form() {

  useContext(myContext);
  const {setUser} = useContext(myContext)

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  const submitForm = (e) => {
    e.preventDefault();
    setUser({name, pass})
  }

  const changeName = (e) => {
    setName(e.target.value)
  }



  return (
    <div>
      <div className="w-screen flex justify-center items-center bg-gray-200">

            <form className="flex flex-col py-14 mb-6 gap-y-7 items-center justify-center bg-gray-300 h-1/2 w-1/2 max-lg:w-3/4 max-sm:w-full" onSubmit={submitForm}>

                <div className="w-full flex justify-center items-center">

                    <label className="mr-3 text-xl text-orange-700 font-semibold" htmlFor="username">Username:</label>

                    <input className="h-12 px-5 py-2 text-xl outline-none w-1/2" type="text" id="username"placeholder="Enter username" value={name} required onChange={changeName}/>

                </div>

                <div className="w-full flex justify-center items-center">

                    <label className="mr-3 text-xl text-orange-700 font-semibold" htmlFor="pass">Password:</label>

                    <input className="h-12 px-5 py-2 text-xl outline-none w-1/2" type="password" id="pass"placeholder="Enter password" required minLength={8} onChange={(e)=>{setPass(e.target.value)}} />

                </div>

                <button className="py-3 px-7 bg-orange-300 hover:bg-orange-400 rounded-sm text-xl font-semibold">Submit</button>

            </form>
        </div>
    </div>
  )
}

export default Form
