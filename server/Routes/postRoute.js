import express from "express"
import { fetchPost ,createPost,EditPost,deletePost} from "../controllers/post.js";

const router = express.Router();

router.get('/',fetchPost)
router.post('/',createPost)
router.put('/:id',EditPost)
router.delete('/:id',deletePost)

export default router;
