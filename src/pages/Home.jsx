import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import ProductList from '../Component/ProductList'
import axios from 'axios'
const Home = () => {
  // let name="Barsha"
  // const[name,setName]=useState("Barsha")
  // setName("rahul")
  // const[age,setAge]=useState(22)
  // const[data,setData]=useState(["Barsha"])
  // const[datas,setDatas]=useState({
  //   name:"Barsha",
  //   address: "itahari"
  // })
  const [blogs,setBlogs]=useState([])
 async function fetchBlog(){
    let response= await axios.get("https://67dbaaae1fd9e43fe4755a15.mockapi.io/blogs")
   if(response.status==200){
    // console.log(response.data)
    setBlogs(response.data)
      
    }else{
      console.log("error")
    }
  }
  //hooks
  useEffect(()=>{
    fetchBlog()
    // console.log("hahaha this is trigger")
  },[])
  // console.log(blogs,"this is a blog created using usestate")
  return (
    <>
    <Navbar />
   <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1684487747385-442d674962f2) no-repeat center', backgroundSize: 'cover'}} className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto">
  <h1 classname="pb-4">Search for product</h1>
  <div classname="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
    <div classname="relative z-30 text-base text-black"><input type="text" defaultValue placeholder="Keyword" className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full" />
      <div classname="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
      </div>
    </div>
  </div>
</div>
<div className="flex flex-wrap p1-20">
  {
    blogs.map(function(blog){
      return(
        <ProductList />
      )
    })
  }
</div>
<Footer />

    </>
  )
}

export default Home