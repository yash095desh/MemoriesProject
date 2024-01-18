import {createSlice} from '@reduxjs/toolkit'

const initialState = {posts:[{
    title : "UnderWater surfing",
    message : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quam deleniti minima.',
    creater:'Yash',
    tags:['#cool','#fool'],
    selectedFile:'/diving image.jpeg',
}]}

export const PostSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        addPost:(state,action)=>{
            
        },
        deletePost:(state,action)=>{

        },
        editPost:(state,action)=>{

        },
        getPost:(state,action)=>{

        }
    }
})

export const {addPost,deletePost,editPost,getPost} = PostSlice.actions

export default PostSlice.reducer