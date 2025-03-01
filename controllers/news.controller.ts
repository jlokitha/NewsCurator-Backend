import {NewsService} from "../services/news.service";
import { Request, Response } from 'express';

const newsService = new NewsService();

export const saveBookmark = async (req: Request, res: Response) => {
    const userId =req.params.userId;
    const news = req.body;
    try {
        console.log('userId', userId);
        const saved = await newsService.saveBookmark(Number(userId), news);
        res.status(200).json(saved);
    } catch (error) {
        console.log(error);
        res.status(400).json('Error saving bookmark');
    }
}

export const findNews = async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId);
        const page = parseInt(req.params.page);
        const news = await newsService.getNews(page, userId);
        console.log(news.length);
        res.status(200).json(news);
    } catch (error) {
        console.log(error);
        res.status(400).json('Error fetching news');
    }
}

export const findNewsByKeyword = async (req: Request, res: Response) => {
    const keyword = req.params.keyword;
    const page = parseInt(req.params.page);
    const userId = Number(req.params.userId);
    try {
        const news = await newsService.getNewsByKeyword(keyword, page, userId);
        console.log('keyword', news.length);
        res.status(200).json(news);
    } catch (error) {
        console.log(error);
        res.status(400).json('Error fetching news');
    }
}