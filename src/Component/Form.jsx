import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = ({text}) => {
  let navigate=useNavigate()
  const [title,setTitle]=useState("")
  const[subtitle,setSubtitle]=useState("")
  const[thumbnail,setThumbnail]=useState("")
  const[description,setDescription]=useState("")
  console.log(title,subtitle,thumbnail,description)
  async function createBlog(e){
    e.preventDefault()
    let response=await axios.post("https://67dbaaae1fd9e43fe4755a15.mockapi.io/blogs",{
      title,
      subtitle,
      thumbnail,
      description
    })
    if(response.status==201){
navigate("/")
    }
    else{
      console.log("error")
    }
  }

  return (
   <>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
    {text=="editpage" ? "Create a Edit page" : " Create a Create Page"}
     
    </h2>
    <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
      Or
      <a href="#" className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
        login to your account
      </a>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {/* {text=="editpage" ? "Edit page" : " Create Page"} */}
      <form  onSubmit={createBlog}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">title</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input id="name" name="name" placeholder="John Doe" type="text" onChange={(e)=>setTitle(e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
            <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd">
                </path>
              </svg>
            
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">SubTitle</label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              iworkedon.com/
            </span>
            <input id="username" name="username" placeholder="john" type="text" onChange={(e)=>setSubtitle(e.target.value)} required className="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
          </div>
        </div>
        <div>
            <div className="mt-6">
            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
             Thumbail
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input id="email" name="email" placeholder="user@example.com" type="text" onChange={(e)=>setThumbnail(e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
          
              </div>
            </div>
          
        </div>

        </div>
        <div className="mt-6">
          <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
           Description
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input id="password" name="password" type="text" onChange={(e)=>setDescription(e.target.value)} required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Create account
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

        {/* {type=="register ? "register" : "login"} */}
    </>
  )
}

export default Form