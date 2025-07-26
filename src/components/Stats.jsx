import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import { useLocation } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox'
const Stats = () => {
    const [finalRepoData, setFinalRepoData] = useState([])
    const [showForked, setShowForked] = useState(false)
    const [showArchieved, setShowArchieved] = useState(false)
    const location = useLocation()
    const {data,repoData} = location.state
    useEffect(() => {
      if (showForked && showArchieved){
        setFinalRepoData(repoData)
      }
      else if(showForked){
        const result = repoData.filter((elem) => { 
            return elem.fork
         })
         setFinalRepoData(result)
        }
        else if (showArchieved){
            const result = repoData.filter((elem) => { 
                return elem.archived
             })
             setFinalRepoData(result)
        }    
        else{
            const result = repoData.filter((elem) => { 
                if (elem.fork || elem.archived){return false}
                else {return true}
             })
             setFinalRepoData(result)
        }
    }, [showForked,showArchieved])
    console.log(finalRepoData)
  return (
    <>
      <Navbar/>
      <div className="w-full min-h-screen ">
        <div className="boxes  py-16 px-60 flex gap-10 ">
            <div className="left min-w-[30%] sticky top-4 ">
                <Profile data={data} />
            </div>
            <div className="right rounded-2xl inter-font bg-gray-200 text-black w-full ">
                <div className="top">
                    <div className="first flex justify-between items-center p-5 px-10 ">
                        <div className="combine text-[#6C7689] inter-font  flex items-center gap-4 ">
                            <h1 className='text-xl'  >Public Repositories</h1>
                            <div className="px-4 py-1 bg-[#F4F4F6] text-black rounded-4xl flex items-center justify-center">
                                <p className='' >{finalRepoData.length}</p>
                            </div>
                        </div>
                        <div className="w-fit px-2 py-2  border">Sort by : Update</div>
                    </div>
                    <div className="second flex justify-around">
                        <input className=' text-xl rounded-xl pr-12 py-[10px] pl-4 bg-gray-200 border' type="text" name="username" placeholder='Search repository.. ' />
                        <div className="checkbox flex items-center gap-5  ">
                            <h5>Include:</h5>
                            <div className='flex items-center gap-4 ' >
                            <div className=" flex gap-1 items-center">
                            <Checkbox onClick={() => { 
                                if (showForked) setShowForked(false)
                                else setShowForked(true)
                             }} />
                            <label htmlFor="forked"> Forked </label>
                            </div>
                            <div className="flex gap-1 items-center">
                            <Checkbox  onClick={() => { 
                                if (showArchieved) setShowArchieved(false)
                                    else setShowArchieved(true)
                             }} />
                            <label htmlFor="archieved"> Archieved </label>
                            </div>
                            </div>                                                      
                        </div>
                    </div>
                </div>
                <div className="h-0.5 usedtoline my-5 bg-[#adadb5] "></div>
                {finalRepoData.map((elem,index) => (
                    <>
                <div key={index} className="box inter-font flex justify-between  px-4 ">
                    <div className="left px-2 flex flex-col ">
                        <h2 className='text-2xl p-1' > {elem.name} </h2>
                        <p className='text-xl p-1 font-semibold text-gray-400' >{elem.description}</p>
                        <div className="combine mt-4 flex gap-10 items-center">
                            <h3 className='text-lg font-semibold ' >{elem.language}</h3>
                            <p className='text-lg p-1 font-semibold text-gray-400' >Updated 1 month ago</p>
                        </div>
                    </div>
                    <div className="right pl-8 my-1 py-4 min-w-[20%] border-l-[1px] flex items-center ">
                        <div className="">
                            <div className="flex gap-2 w-full  ">
                                <svg className='w-6'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                                <p>{elem.stargazers_count} Stars </p>
                            </div>
                            <div className="flex gap-2">
                                <svg  className='w-7' fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.42 6.274c.043.326.18.721.41 1.185.23.464.666.816 1.308 1.056.651.24 1.03.457 1.14.65.108.194.162.355.162.484v.09c-.4.12-.73.348-.99.682-.26.335-.39.718-.39 1.147 0 .532.189.987.566 1.365A1.87 1.87 0 008 13.5a1.87 1.87 0 001.374-.567c.377-.378.566-.833.566-1.365 0-.43-.13-.812-.39-1.146a1.933 1.933 0 00-.99-.683v-.09c0-.13.054-.288.163-.477.108-.189.488-.408 1.139-.657.642-.24 1.079-.592 1.309-1.056.23-.464.366-.859.41-1.185a1.913 1.913 0 001.015-.676c.27-.34.404-.728.404-1.166 0-.532-.191-.987-.573-1.365A1.877 1.877 0 0011.06 2.5c-.538 0-.998.189-1.38.567a1.851 1.851 0 00-.573 1.365c0 .42.128.797.384 1.127.256.33.58.56.97.69a2.396 2.396 0 01-.274.675c-.138.245-.377.432-.716.56-.33.13-.616.263-.859.4a2.878 2.878 0 00-.612.45 2.878 2.878 0 00-.612-.45 6.731 6.731 0 00-.86-.4c-.338-.128-.577-.315-.715-.56a2.397 2.397 0 01-.274-.676c.39-.129.714-.358.97-.689a1.79 1.79 0 00.384-1.127c0-.532-.19-.987-.573-1.365A1.892 1.892 0 004.94 2.5c-.53 0-.985.189-1.367.567A1.851 1.851 0 003 4.432c0 .438.135.827.404 1.166.269.339.607.564 1.015.676zm6.64-2.666c.226 0 .42.08.586.238a.782.782 0 01.247.586.788.788 0 01-.247.58.805.805 0 01-.586.244.799.799 0 01-.593-.244.799.799 0 01-.24-.58c0-.232.08-.427.24-.586a.81.81 0 01.593-.238zm-2.227 7.96a.782.782 0 01-.247.586.816.816 0 01-.586.238.816.816 0 01-.586-.238.782.782 0 01-.247-.586c0-.223.082-.417.247-.58A.805.805 0 018 10.744c.226 0 .421.081.586.244a.788.788 0 01.247.58zM4.94 3.608a.81.81 0 01.593.238c.16.159.24.354.24.586 0 .223-.08.417-.24.58a.799.799 0 01-.593.244.805.805 0 01-.586-.244.788.788 0 01-.247-.58c0-.232.082-.427.247-.586a.816.816 0 01.586-.238z"></path></svg>                            <p>{elem.forks_count} Forks </p>
                            </div>
                            <div className="flex gap-2">
                                <svg className='w-7' fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path clip-rule="evenodd" d="M8 3.574a4.426 4.426 0 100 8.852 4.426 4.426 0 000-8.852zM2.426 8a5.574 5.574 0 1111.148 0A5.574 5.574 0 012.426 8z"></path><path d="M9 8a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>                            <p>{elem.open_issues} Issues </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-0.5 usedtoline my-5 bg-[#adadb5] "></div>
                    </>
                 ))}


            </div>
        </div>
      </div>
    </>
  )
}

export default Stats
