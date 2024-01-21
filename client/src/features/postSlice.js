import {createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const url = 'http://localhost:3000/post';
export const createPost = createAsyncThunk('post/create',async(data)=>{
    const response = await axios.post('http://localhost:3000/post',data)
    return response
})
export const fetchPost = createAsyncThunk('post/fetch',async()=>{
    const response = await axios.get(url)
    return response
})
export const deletePost = createAsyncThunk('post/delete',async(id)=>{
    const response = await axios.delete(`${url}/${id}`)
    return response
})
export const updatePost = createAsyncThunk('post/edit',async(data)=>{
    console.log(data)
    const id = data._id;
    const response = await axios.put(`${url}/${id}`,data)
    return response
})


const PostSlice = createSlice({
    name : 'PostSlice',
    initialState:{
        posts:[],
        loading:true,
        error:null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(createPost.pending,(state,action)=>{
            state.loading = false
            
        }),
       builder.addCase(createPost.fulfilled,(state,action)=>{
        console.log(action.payload)
        state.posts.push(action.payload.data)
       }),
       builder.addCase(createPost.rejected,(state,action)=>{
        state.loading = false
        console.log('create call rejected')
     }),
     builder.addCase(fetchPost.fulfilled,(state,action)=>{
        console.log(action.payload)
        state.posts= action.payload.data
     }),
     builder.addCase(deletePost.fulfilled,(state,action)=>{
        const id = action.payload.data._id;
        state.posts = state.posts.filter((post)=>post._id !== id)
     }),
     builder.addCase(updatePost.fulfilled,(state,action)=>{
        const id = action.payload.data._id;
        console.log(id)
        state.posts = state.posts.map((post)=>post._id !== id ? post : action.payload.data )
     })
    }
   
    

})

export  const PostReducer =  PostSlice.reducer