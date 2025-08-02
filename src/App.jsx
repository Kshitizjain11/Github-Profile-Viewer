import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Particle from './components/styles/Particle'
import { getdev } from './datafordevs/developers'

const App = () => {
  const [devsUsername, setDevsUsername] = useState([])
  const [username, setUsername] = useState("")
  const [data, setData] = useState({})
  const [InitalRepoData, setInitialRepoData] = useState({})
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  
  const inputHandler = (e) => { 
    setUsername(e.target.value)
   }
   const buttonClick = async() => { 
     if (username !== ""){
        console.log(username)
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`) 
          const InitalRepoData = await axios.get(`https://api.github.com/users/${username}/repos`)
          setData(response.data)
          setInitialRepoData(InitalRepoData.data)
          setMessage("Done")
        } catch (error) {
          setMessage("error")
        }
    }
    else{
      console.error("Username is Required")
    }
 }
 useEffect(() => {
  if(message === "Done"  ) navigate('/profile',{state: {data,InitalRepoData}})
 
 }, [data])
 useEffect(() => {
   const data = getdev()
   setDevsUsername(data)
 }, [])
 
 
 
   
  return (
    <>
    <div className="w-full min-h-screen background text-white p-1">
      <Particle>
      <div className='px-32 pt-28 m-10' >
      <div className="Header  flex items-center gap-3 ">
        <svg className='w-8' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.509 0 12.306c0 5.435 3.438 10.047 8.207 11.673.6.114.818-.267.818-.593 0-.29-.01-1.066-.016-2.091-3.338.742-4.042-1.65-4.042-1.65-.545-1.421-1.332-1.8-1.332-1.8-1.09-.763.082-.748.082-.748 1.204.087 1.838 1.267 1.838 1.267 1.07 1.881 2.808 1.339 3.492 1.022.11-.793.42-1.336.763-1.644-2.664-.31-5.466-1.366-5.466-6.08 0-1.344.468-2.443 1.234-3.301-.124-.312-.535-1.564.118-3.257 0 0 1.008-.33 3.3 1.261A11.23 11.23 0 0112 5.95c1.02.004 2.047.14 3.005.414 2.291-1.592 3.297-1.262 3.297-1.262.655 1.694.242 2.946.12 3.257.767.859 1.233 1.958 1.233 3.3 0 4.73-2.806 5.769-5.479 6.073.431.38.813 1.13.813 2.278 0 1.644-.013 2.972-.013 3.375 0 .33.216.712.825.593C20.566 22.348 24 17.74 24 12.305 24 5.509 18.627 0 12.001 0H12z"></path></svg>
        <h2 className='text-2xl font-semibold  inter-font' >Github Profile Viewer</h2>
      </div>
      <div className="w-[38vw] mt-8 pt-10 flex items-center gap-3 ">
      <h1 className='text-5xl leading-15 tracking-tight inter-font-bold' >A simpler way to show your GitHub profile and repositories.</h1>
      </div>
      <div className=" flex w-[40%] mt-10 justify-between items-center gap-4">
        <input onChange={inputHandler} className=' w-full text-lg rounded-2xl py-[14px] pl-4 bg-[#283157] focus:bg-amber-50 focus:text-black' value={username}  type="text" name="username"  placeholder='Enter a GitHub username..' />
        <button onClick={buttonClick} className='py-[12px] px-8 rounded-2xl text-lg  border-[1px] border-[#283157]' >View</button> 
      </div>
      <div className="mt-16">
        <h1 className='text-[#4E5E7E] text-lg inter-font-bold ' >Amazing developers</h1>
        <div className="w-full p-1">
          {devsUsername.map((elem,index) => { 
            return <div onClick={() => { setUsername(elem) }} key={index} className="inline p-1.5 cursor-pointer">
              <h6  className='text-sm inline-block hover:text-[#D2D4DC]  hover:bg-[#1E2852] text-[#737993] inter-font  py-1 px-2.5 rounded-md bg-[#1D274D]' > {elem}  </h6>
            </div>
           })}

        </div>
      </div>
      <div className="mt-10">
        <h1 className='text-[#4E5E7E] hover:text-[#507198] cursor-pointer text-sm inter-font-bold ' >Created by Kshitiz</h1>
      </div>
    </div>
      </Particle>
    
    </div>
    
    </>
  )
}

export default App
