
import PostMessage from "../Modals/postModel.js"

export const getPost = async(req,res)=>{
    try {
        const PostMessage = await PostMessage.find();
        res.status(200).send(PostMessage)
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
export const EditPost = (req,res)=>{
    res.status(201).send('Home')
}
export const deletePost = (req,res)=>{
    res.status(201).send('Home')
}