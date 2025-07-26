import Checkbox from '@mui/material/Checkbox'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-[#1F2633] text-gray-200 justify-around items-center'>
      <div className="flex justify-between items-center gap-4">
        <svg className='w-8' fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.509 0 12.306c0 5.435 3.438 10.047 8.207 11.673.6.114.818-.267.818-.593 0-.29-.01-1.066-.016-2.091-3.338.742-4.042-1.65-4.042-1.65-.545-1.421-1.332-1.8-1.332-1.8-1.09-.763.082-.748.082-.748 1.204.087 1.838 1.267 1.838 1.267 1.07 1.881 2.808 1.339 3.492 1.022.11-.793.42-1.336.763-1.644-2.664-.31-5.466-1.366-5.466-6.08 0-1.344.468-2.443 1.234-3.301-.124-.312-.535-1.564.118-3.257 0 0 1.008-.33 3.3 1.261A11.23 11.23 0 0112 5.95c1.02.004 2.047.14 3.005.414 2.291-1.592 3.297-1.262 3.297-1.262.655 1.694.242 2.946.12 3.257.767.859 1.233 1.958 1.233 3.3 0 4.73-2.806 5.769-5.479 6.073.431.38.813 1.13.813 2.278 0 1.644-.013 2.972-.013 3.375 0 .33.216.712.825.593C20.566 22.348 24 17.74 24 12.305 24 5.509 18.627 0 12.001 0H12z"></path></svg>
        <h1 className='text-lg  inter-font-bold ' >GitHub Profile Viewer</h1>
      </div>
      <div className="search p-2">
        <input className='w-full text-lg rounded-xl pr-12 py-[5px] pl-4 bg-[#363C48] ' type="text" name="username" placeholder='Enter GitHub username..' />
      </div>
    </div>
  )
}

export default Navbar
