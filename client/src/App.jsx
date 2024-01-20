import React, { useEffect, useState } from "react";
import Appbar from "./Components/Appbar";
import Post from "./Components/Post";
import Form from "./Components/Form";
import { useDispatch ,useSelector} from "react-redux";
import { fetchPosts } from "./features/Post/postSlice";





function App() {

 const [updateId,setUpdateId]=useState('') 

const dispatch = useDispatch()
const data = useSelector((state)=>state.posts)
useEffect(()=>{
  dispatch(fetchPosts())
},[dispatch,updateId])



  return (
   <div className=" w-full flex justify-center items-center">
     <div className=" flex flex-col items-center justify-center w-[90%]">
      <Appbar />
      <div className="main flex w-[90%]">
        {/* POST */}
        <div className="Posts">
          {data.map((post)=>{
            return <Post key={post._id} post={post} setUpdateId={setUpdateId}  />
          })}
       
        </div>

        {/* EditPost */}
        <Form updateId={updateId} setUpdateId={setUpdateId}/>
      </div>
    </div>
   </div>
  );
}

export default App;
