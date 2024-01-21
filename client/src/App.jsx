import React, { useEffect, useState } from "react";
import Appbar from "./Components/Appbar";
import Post from "./Components/Post";
import Form from "./Components/Form";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./features/postSlice";






function App() {
  const [currentId ,setcurrentId]=useState('')
  const data = useSelector((state)=>state.posts)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPost())
  },[])

  return (
   <div className=" w-full flex justify-center items-center">
     <div className=" flex flex-col items-center justify-center w-[90%]">
      <Appbar />
      <div className="main flex w-[90%]">
        {/* POST */}
        <div className="Posts">
          {data.map((post)=>{
            return <Post post={post} key={post._id} setcurrentId={setcurrentId}/>
          })}
       
        </div>

        {/* EditPost */}
        <Form currentId={currentId} setcurrentId={setcurrentId} />
      </div>
    </div>
   </div>
  );
}

export default App;
