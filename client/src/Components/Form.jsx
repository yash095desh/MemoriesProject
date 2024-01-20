import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost ,fetchPosts,updatePost} from '../features/Post/postSlice';


function Form({updateId,setUpdateId}) {
  const dispatch = useDispatch()
  const [Post,setPost]=useState({creater:'',title:'',message:'',tags:[],selectedFile:''})
  const post = useSelector((state)=>updateId?(state.posts.find((post)=>post._id == updateId)):null)

  useEffect(()=>{
    if(post){
      setPost(post)
    }
  },[post])

  const convertBase64 = (e)=>{
    const file = e.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    
    reader.onload =()=>{
      setPost((prev)=>({...prev,selectedFile:reader.result}))
    }
  }
  const handleClick = (e)=>{
    e.preventDefault()
    if(updateId == '' ){
      dispatch(addPost(Post))
    }
    else{
      dispatch(updatePost(Post))
      setUpdateId('')
    }
    setPost({creater:'',title:'',message:'',tags:[],selectedFile:''})
    dispatch(fetchPosts())
   
  }
  
  return (
    <div className="editPost mx-5   ">
          <form action="" className="flex flex-col  mx-5 p-5 rounded-xl shadow" onSubmit={(e)=>{handleClick(e)}}>
            <h1 className="font-[600] text-[25px]">Create A Memory</h1>
            <input type="text" placeholder="Creater" className="formBorder" required value={Post.creater} onChange={(e)=>{setPost((prev)=>({...prev,creater:e.target.value}))}} />
            <input type="text" placeholder="Title" className="formBorder"  required value={Post.title} onChange={(e)=>{
            setPost((prev)=>({...prev , title:e.target.value}))
            }}/>
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="Message"
              className="m-[5px] p-[8px] rounded-[5px] formBorder"
              value={Post.message}
              required
              onChange={(e)=>{
                setPost((prev)=>({...prev,message:e.target.value}))
              }}
            ></textarea>
            <input
              type="text"
              placeholder="Tag(comma seperated)"
              className="formBorder"
              value={Post.tags.toString()}
              required
              onChange={(e)=>{
                const str = e.target.value 
                setPost((prev)=>({...prev,tags:str.split(",")}))
              }}
            />
            <input type="file" name="" id=""   required onChange={(e)=>{convertBase64(e)}} />
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