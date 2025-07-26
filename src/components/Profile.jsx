import React from 'react'

const Profile = ({data}) => {
  return (
    <div className='w-full bg-gray-200 py-2 px-6 rounded-2xl ' >
      <div className="prof&img text-black mt-4 inter-font flex gap-6 items-center ">
        <div className="img w-18 h-18 rounded-full bg-gray-300 overflow-hidden  ">
        <img className='w-full h-full object-cover' src={data.avatar_url} alt="" />  
        </div> 
        <div className="text flex flex-col">
            <h2 className='text-2xl' >{data.name}</h2>
            <div className="flex gap-2 items-center">
            <svg className='w-5' fill="#676d79" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.509 0 12.306c0 5.435 3.438 10.047 8.207 11.673.6.114.818-.267.818-.593 0-.29-.01-1.066-.016-2.091-3.338.742-4.042-1.65-4.042-1.65-.545-1.421-1.332-1.8-1.332-1.8-1.09-.763.082-.748.082-.748 1.204.087 1.838 1.267 1.838 1.267 1.07 1.881 2.808 1.339 3.492 1.022.11-.793.42-1.336.763-1.644-2.664-.31-5.466-1.366-5.466-6.08 0-1.344.468-2.443 1.234-3.301-.124-.312-.535-1.564.118-3.257 0 0 1.008-.33 3.3 1.261A11.23 11.23 0 0112 5.95c1.02.004 2.047.14 3.005.414 2.291-1.592 3.297-1.262 3.297-1.262.655 1.694.242 2.946.12 3.257.767.859 1.233 1.958 1.233 3.3 0 4.73-2.806 5.769-5.479 6.073.431.38.813 1.13.813 2.278 0 1.644-.013 2.972-.013 3.375 0 .33.216.712.825.593C20.566 22.348 24 17.74 24 12.305 24 5.509 18.627 0 12.001 0H12z"></path></svg>
            <h2 className='text-gray-600' >{data.login}</h2>
            </div>
        </div>
      </div>
      <div className="h-0.5  mt-10 bg-[#adadb5] "></div>
      <div className="text my-10">
        <h3 className='text-xl  text-black inter-font' >{data.bio || "Bio isn't given"} </h3>
      </div>
      <div className="h-0.5  my-5 bg-[#adadb5] "></div>

      {data.location && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Location</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.location}</p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.company && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Company</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.company} </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.blog && (
        <>
          <div className="repeatable flex justify-between items-center  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Website</h1>
              <p className='text-gray-500 inter-font text-xl w-[40%] break-words tracking-tight ' >{data.blog}</p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.email && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Email</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.email} </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.twitter_username && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Twitter</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.twitter_username} </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.following !== undefined && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Following</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.following} </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.followers !== undefined && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Followers</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.followers} </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.public_repos !== undefined && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Repos</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.public_repos}  </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}
      {data.public_gists !== undefined && (
        <>
          <div className="repeatable flex justify-between  ">
            <h1 className='text-gray-500 inter-font text-xl tracking-tight' >Gists</h1>
            <p className='text-gray-500 inter-font text-xl tracking-tight' > {data.public_gists}  </p>
          </div>
          <div className="h-0.5  my-5 bg-[#adadb5] "></div>
        </>
      )}

      
    </div>
  )
}

export default Profile
