import {Router} from "express";
import {findNews, findNewsByKeyword, saveBookmark} from "../controllers/news.controller";

const router = Router();

router.post('/:userId', saveBookmark);

router.get('/:userId/:page', findNews);

router.get('/keyword/:keyword/:userId/:page', findNewsByKeyword);

export default router;