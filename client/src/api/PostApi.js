import axios  from 'axios'


const url = 'http://localhost:3000/post'



export const createPost = (data)=>{
    const post = data
    console.log(post)
   axios.post(url,post)
   .then((res)=>{console.log(`Created`,res)})
   .catch((err)=>console.log(err.message))
}
export const removePost= (id)=>{
    axios.delete(`${url}/${id}`)
    .then((res)=> res)
    .catch((err)=>console.log(err.message))
}
export const editPost = (id,data)=>{
    axios.put(`${url}/${id}`,data)
    .then((res)=>res)
    .catch((err)=>console.log(err.message))
}