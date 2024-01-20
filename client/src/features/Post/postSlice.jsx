import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {createPost, removePost,editPost} from  '../../api/PostApi.js'
import axios from 'axios'



const url = 'http://localhost:3000/post'

export const fetchPosts = createAsyncThunk('fetchPosts',async()=>{
    const response = await axios.get('http://localhost:3000/post')
    return  response;
})

const initialState = {
    posts:[{
        _id : '',
        createdAt : '',
        creater :'',
        likeCount : 0,
        message : '',
        selectedFile : '',
        tags : [''],
        _v : 0,
    }],
}

export const PostSlice = createSlice({
    name : "post",
    initialState,
    reducers : {
        addPost:(state,action)=>{
            const data = action.payload
            createPost(data)

        },
        deletePost:(state,action)=>{
           const res = removePost(action.payload)
           return res
        },
        updatePost:(state,action)=>{
            const id = action.payload._id
            const post = action.payload
            const res = editPost(id,post)
        },
        getPost:async(state,action)=>{
        
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.posts = action.payload.data;
        })
        builder.addCase(fetchPosts.rejected,(state,action)=>{
            console.log("rejected")
        })
        builder.addCase(fetchPosts.pending,(state,action)=>{
            console.log("pending")
        })
    }
})

export const {addPost,deletePost,updatePost,getPost} = PostSlice.actions

export default PostSlice.reducer