import React from 'react'
import {Link} from 'react-router-dom'

const ProductList = ({blog}) => {
  return (

<Link to={"/Singlepage/"+ blog.id}>
<div className="flex px-3 py-3">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={blog.thumbnail} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{blog.title}</div>
      <p className="text-gray-700 text-base">
       {blog.description}
      </p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>
  </div>
</div>

</Link>

  )
}

export default ProductList