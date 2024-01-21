import React, { useState ,useEffect} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../features/postSlice'



function Form({currentId,setcurrentId}) {
  const dispatch = useDispatch()
  const [Post,setPost]=useState({creater:'',title:'',message:'',tags:[],selectedFile:''})
  const postdata = useSelector((state)=>currentId?state.posts.find((post)=>post._id == currentId):null)

  useEffect(()=>{
    if(postdata){
      setPost(postdata)
    }  
  },[currentId])

  const convertBase64 = (e)=>{
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    
    reader.onload =()=>{
      setPost((prev)=>({...prev,selectedFile:reader.result}))
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!postdata){
      dispatch(createPost(Post))
    }
    else{
      dispatch(updatePost(Post))
      setcurrentId('')
    }
    setPost({creater:'',title:'',message:'',tags:[],selectedFile:''})
  }
  
  
  return (
    <div className="editPost mx-5   ">
          <form action="" className="flex flex-col  mx-5 p-5 rounded-xl shadow" onSubmit={handleSubmit} >
            <h1 className="font-[600] text-[25px]">Create A Memory</h1>
            <input type="text" placeholder="Creater" className="formBorder" value={Post.creater} required  onChange={(e)=>{setPost((prev)=>({...prev,creater:e.target.value}))}} />
            <input type="text" placeholder="Title" className="formBorder" value={Post.title}  required  onChange={(e)=>{setPost((prev)=>({...prev,title:e.target.value}))}}/>
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="Message"
              value={Post.message}
              className="m-[5px] p-[8px] rounded-[5px] formBorder"
              onChange={(e)=>{setPost((prev)=>({...prev,message:e.target.value}))}}
              required
             
            ></textarea>
            <input
              type="text"
              placeholder="Tag(comma seperated)"
              className="formBorder"
              required
             value={(Post.tags).toString()}
             onChange={(e)=>{setPost((prev)=>({...prev,tags:(e.target.value).split(",")}))}}
            />
            <input type="file" name="" id="" onChange={(e)=>convertBase64(e)} />
            <button className="button bg-blue-900 mb-4" type='submit'>
              Submit<span className="material-symbols-outlined pl-2">send</span>
            </button>
            <button className="button bg-red-900 ">
              Clear
              <span className="material-symbols-outlined pl-2">
                restart_alt
              </span>
            </button>
          </form>
        </div>
  )
}

export default Form