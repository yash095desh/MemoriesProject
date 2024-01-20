import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { deletePost, fetchPosts } from '../features/Post/postSlice'


function Post(prop) {
  const dispatch = useDispatch()

  return (
    <div className="post shadow w-[320px] h-[380px] rounded-xl relative bg-[#fff]">
    <div>
      <img
        src={prop.post.selectedFile}
        alt=""
        className=" absolute w-full h-[50%] z-[0] mainImg "
      />
      {/* Upperdiv */}
      <div className=" absolute flex w-full justify-between items-center p-4 z-[1]  text-white font-[Roboto] ">
        <div>
          <h2 className="font-[700] text-[20px]">{prop.post.creater}</h2>
          <p className="text-[15px] font-[500]">2 months ago</p>
        </div>
        <button onClick={()=>{
          prop.setUpdateId(prop.post._id)
          }}><span className="material-symbols-outlined cursor-pointer">more_horiz</span></button>
      </div>
    </div>
    {/* LowerDiv */}
    <div className="pt-[60%] p-3 ">
      <p className="font-[Roboto] text-[15px] text-slate-600">{prop.post.tags.toString()}</p>
      <h1 className="mt-5 text-[18px] font-[700] font-[Roboto]">
        {prop.post.title}
      </h1>
      <p className="text-[13px] font-[400]">
        {prop.post.message}
      </p>
      <div className="flex justify-between items-center mt-9 p-2">
        <h2 className='flex justify-center items-center'><span className="material-symbols-outlined pr-2">thumb_up</span>{prop.post.likeCount}</h2>
        <button   onClick={()=>{
                const id = prop.post._id
               dispatch(deletePost(id))
               dispatch(fetchPosts())
                
          }}>  <span className="material-symbols-outlined cursor-pointer" >delete</span></button>
      </div>
    </div>
  </div>
  )
}

export default Post