import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"

function Post() {
  const data = useSelector(state => state.posts)
  const dispatch = useDispatch()
  console.log(data)
  
  return (
    <div className="post shadow w-[320px] h-[380px] rounded-xl relative">
    <div>
      <img
        src="/diving image.jpeg"
        alt=""
        className=" absolute w-full h-[50%] z-[0] mainImg "
      />
      {/* Upperdiv */}
      <div className=" absolute flex w-full justify-between items-center p-4 z-[1]  text-white font-[Roboto] ">
        <div>
          <h2 className="font-[700] text-[20px]">Mark</h2>
          <p className="text-[15px] font-[500]">2 months ago</p>
        </div>
        <span className="material-symbols-outlined">more_horiz</span>
      </div>
    </div>
    {/* LowerDiv */}
    <div className="pt-[60%] p-3 ">
      <p className="font-[Roboto] text-[15px] text-slate-600">#tags #tags</p>
      <h1 className="mt-5 text-[18px] font-[700] font-[Roboto]">
        Visited the Escape Room
      </h1>
      <p className="text-[13px] font-[400]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
        quam deleniti minima.
      </p>
      <div className="flex justify-between items-center mt-9 p-2">
        <h2 className='flex justify-center items-center'><span className="material-symbols-outlined pr-2">thumb_up</span>1</h2>
        <span className="material-symbols-outlined">delete</span>
      </div>
    </div>
  </div>
  )
}

export default Post