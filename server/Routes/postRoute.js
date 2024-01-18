import express from "express"
import { getPost ,createPost,EditPost,deletePost} from "../controllers/post.js";

const router = express.Router();

router.get('/',getPost)
router.post('/',createPost)
router.put('/',EditPost)
router.delete('/',deletePost)

export default router;
