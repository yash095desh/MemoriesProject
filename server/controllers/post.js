
import PostMessage from "../Modals/postModel.js"

export const fetchPost = async(req,res)=>{
    try {
        const Post = await PostMessage.find({});
        res.status(200).send(Post)
    } catch (error) {
        console.log(error.message)
    }
}
export const createPost = async(req,res)=>{
    try {
        const post = req.body;
        const newPost = new PostMessage(post)
        await newPost.save();

        res.status(200).send(newPost)
    } catch (error) {
        
    }
}
export const EditPost = async(req,res)=>{
    try {
        const {id} = req.params
        const post =req.body;
        const response = await PostMessage.findByIdAndUpdate(id,post,{new:true})
        res.status(201).send(response)
    } catch (error) {
        console.log(error)
    }
}
export const deletePost = async(req,res)=>{
    try {
        const {id} = req.params
        const result = await PostMessage.findByIdAndDelete(id)
        res.status(201).send(result)
    } catch (error) {
        console.log(err.message)
    }
}