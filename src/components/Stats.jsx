import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import { useLocation } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox'
import { getSearched, sorter } from '../datafordevs/developers'
import SimpleListMenu from './Menubar'
import { useSort } from '../context/SortContext'
import { dateFormat } from '../datafordevs/dateFormatting'
const Stats = () => {
    const [inputforSearch, setInputforSearch] = useState("")
    const [finalRepoData, setFinalRepoData] = useState([])
    const [showForked, setShowForked] = useState(true)
    const [showArchieved, setShowArchieved] = useState(true)
    const location = useLocation()
    const {data,InitalRepoData} = location.state
    const {selectedSort,setSelectedSort} = useSort()
    
    // useEffect(() => {
    //   if (inputforSearch !== ""){
    //     let searchedData = getSearched(inputforSearch,repoData)
    //     setFinalRepoData(searchedData)
    //   }
    //   else setFinalRepoData(repoData)
    
    // }, [inputforSearch])   

    useEffect(() => {
      const repoData = sorter(InitalRepoData,selectedSort)
      if (showForked && showArchieved){
        if (inputforSearch !== ""){
        let searchedData = getSearched(inputforSearch,repoData)
        setFinalRepoData(searchedData)
      }
        else {
          const final = sorter(repoData,selectedSort)
          console.log(final)
          setFinalRepoData(repoData)}
        }
      else if(showForked){
        const result = repoData.filter((elem) => { 
             if (elem.archived) {return false}
             else return true
         })
         if (inputforSearch !== ""){
        let searchedData = getSearched(inputforSearch,result)
        setFinalRepoData(searchedData)
      }
      else setFinalRepoData(result)
        }
        else if (showArchieved){
            const result = repoData.filter((elem) => { 
                if (elem.fork) return false
                else return true
             })
             if (inputforSearch !== ""){
              let searchedData = getSearched(inputforSearch,result)
              setFinalRepoData(searchedData)
              }
              else setFinalRepoData(result)
        }    
        else{
            const result = repoData.filter((elem) => { 
                if (elem.fork || elem.archived){return false}
                else {return true}
             })
             if (inputforSearch !== ""){
                let searchedData = getSearched(inputforSearch,result)
                setFinalRepoData(searchedData)
              }
              else setFinalRepoData(result)
        }
    }, [showForked,showArchieved,inputforSearch,selectedSort])
  return (
    <>
      <Navbar/>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="max-w-6xl mx-auto py-12 px-4 md:px-8 flex flex-col md:flex-row gap-8">
          <div className="left md:w-[38%] sticky top-4 h-fit">
            <div className="bg-gray-100 rounded-xl shadow-md p-5 max-w-sm mx-auto">
              <Profile data={data} fontSizeClass="text-sm md:text-base" nameSizeClass="text-lg md:text-xl" />
            </div>
          </div>
          <div className="right md:w-2/3 bg-white rounded-xl shadow-md p-6 inter-font text-black">
            <div className="top">
              <div className="first flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="combine text-[#6C7689] inter-font flex items-center gap-3">
                  <h1 className='text-base md:text-lg font-semibold'>Public Repositories</h1>
                  <div className="px-3 py-0.5 bg-[#F4F4F6] text-black rounded-full flex items-center justify-center text-base font-bold">
                    <p>{ finalRepoData.length }</p>
                  </div>
                </div>
                <button className="w-fit flex rounded-lg  hover:bg-gray-100 transition items-center text-xs md:text-sm"> <SimpleListMenu/> </button>
              </div>
              <div className="second flex flex-col md:flex-row justify-between items-center gap-3 mb-6">
                <input onChange={(e) => { 
                  setInputforSearch(e.currentTarget.value)
                 }} className='w-full md:w-2/3 text-xs md:text-sm rounded-xl px-4 py-2 pl-3 bg-gray-100 border border-gray-300 focus:border-blue-400 focus:bg-white transition' type="text" name="username" value={inputforSearch} placeholder='Search repository.. ' />
                <div className="checkbox flex items-center gap-3">
                  <h5 className="font-semibold text-xs md:text-sm">Include:</h5>
                  <div className='flex items-center gap-2'>
                    <div className="flex gap-1 items-center">
                      <Checkbox defaultChecked size="small" onClick={() => setShowForked(!showForked)} />
                      <label htmlFor="forked" className="text-xs md:text-sm">Forked</label>
                    </div>
                    <div className="flex gap-1 items-center">
                      <Checkbox defaultChecked size="small" onClick={() => setShowArchieved(!showArchieved)} />
                      <label htmlFor="archieved" className="text-xs md:text-sm">Archived</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {finalRepoData.map((elem, index) => (
                <div key={index} className="py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 text-xs md:text-sm">
                  <div className="left flex-1 flex flex-col gap-1">
                    <a 
                      href={elem.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex items-center gap-2 w-fit rounded-md px-2 py-1 -ml-2 transition-all hover:bg-gray-100"
                    >
                      <h2 className='headingOfRepo text-base md:text-lg font-bold text-gray-800 break-words  transition-colors'>
                        {elem.name}
                      </h2>
                      <svg 
                  className='w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200  self-center'
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 16 16"
                >
                  <path 
                    clipRule="evenodd" 
                    d="M4.87 4.278c0-.317.257-.575.575-.575h5.833a.573.573 0 01.404.166l.003.003.002.002a.575.575 0 01.166.404v5.833a.575.575 0 11-1.15 0V5.666l-6.018 6.019a.575.575 0 01-.813-.813L9.89 4.853H5.445a.575.575 0 01-.575-.575z"
                  ></path>
                </svg>
                    </a>
                    <p className='text-xs md:text-sm font-medium text-gray-500 break-words'>{elem.description}</p>
                    <div className="flex gap-3 items-center mt-1">
                      <span className='text-xs font-semibold text-blue-600'>{elem.language}</span>
                      <span className='text-xs text-gray-400'>Updated {dateFormat(elem.updated_at)} </span>
                    </div>
                  </div>
                  <div className="right flex flex-col gap-2 min-w-[120px] md:border-l md:pl-4">
                    <div className="flex gap-1 items-center">
                      <svg className='w-4 h-4 text-yellow-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>
                      <span className='font-semibold text-gray-700'>{elem.stargazers_count} Stars</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg className='w-4 h-4 ' fill="#ad46ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.42 6.274c.043.326.18.721.41 1.185.23.464.666.816 1.308 1.056.651.24 1.03.457 1.14.65.108.194.162.355.162.484v.09c-.4.12-.73.348-.99.682-.26.335-.39.718-.39 1.147 0 .532.189.987.566 1.365A1.87 1.87 0 008 13.5a1.87 1.87 0 001.374-.567c.377-.378.566-.833.566-1.365 0-.43-.13-.812-.39-1.146a1.933 1.933 0 00-.99-.683v-.09c0-.13.054-.288.163-.477.108-.189.488-.408 1.139-.657.642-.24 1.079-.592 1.309-1.056.23-.464.366-.859.41-1.185a1.913 1.913 0 001.015-.676c.27-.34.404-.728.404-1.166 0-.532-.191-.987-.573-1.365A1.877 1.877 0 0011.06 2.5c-.538 0-.998.189-1.38.567a1.851 1.851 0 00-.573 1.365c0 .42.128.797.384 1.127.256.33.58.56.97.69a2.396 2.396 0 01-.274.675c-.138.245-.377.432-.716.56-.33.13-.616.263-.859.4a2.878 2.878 0 00-.612.45 2.878 2.878 0 00-.612-.45 6.731 6.731 0 00-.86-.4c-.338-.128-.577-.315-.715-.56a2.397 2.397 0 01-.274-.676c.39-.129.714-.358.97-.689a1.79 1.79 0 00.384-1.127c0-.532-.19-.987-.573-1.365A1.892 1.892 0 004.94 2.5c-.53 0-.985.189-1.367.567A1.851 1.851 0 003 4.432c0 .438.135.827.404 1.166.269.339.607.564 1.015.676zm6.64-2.666c.226 0 .42.08.586.238a.782.782 0 01.247.586.788.788 0 01-.247.58.805.805 0 01-.586.244.799.799 0 01-.593-.244.799.799 0 01-.24-.58c0-.232.08-.427.24-.586a.81.81 0 01.593-.238zm-2.227 7.96a.782.782 0 01-.247.586.816.816 0 01-.586.238.816.816 0 01-.586-.238.782.782 0 01-.247-.586c0-.223.082-.417.247-.58A.805.805 0 018 10.744c.226 0 .421.081.586.244a.788.788 0 01.247.58zM4.94 3.608a.81.81 0 01.593.238c.16.159.24.354.24.586 0 .223-.08.417-.24.58a.799.799 0 01-.593.244.805.805 0 01-.586-.244.788.788 0 01-.247-.58c0-.232.082-.427.247-.586a.816.816 0 01.586-.238z"></path></svg>
                      <span className='font-semibold text-gray-700'>{elem.forks_count} Forks</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <svg className='w-4 h-4 text-red-500' fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path clipRule="evenodd" d="M8 3.574a4.426 4.426 0 100 8.852 4.426 4.426 0 000-8.852zM2.426 8a5.574 5.574 0 1111.148 0A5.574 5.574 0 012.426 8z"></path><path d="M9 8a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                      <span className='font-semibold text-gray-700'>{elem.open_issues} Issues</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Stats
