import { PrismaClient } from "@prisma/client";
import {News} from "../models/news.model";

const prisma = new PrismaClient();

export class NewsRepository {
    async createNews(news: News, userId: number) {
        const existingArticle = await prisma.article.findUnique({
            where: {
                title: news.title,
                url: news.url,
                publishedAt: news.publishedAt,
            },
        });

        let article;

        if (existingArticle) {
            article = existingArticle;
        } else {
            article = await prisma.article.create({
                data: {
                    source: news.source || '',
                    author: news.author || '',
                    title: news.title,
                    description: news.description || '',
                    url: news.url || '',
                    urlToImage: news.urlToImage || '',
                    publishedAt: news.publishedAt,
                    content: news.content || '',
                },
            });
        }

        await prisma.bookmark.create({
            data: {
                userId: userId,
                articleId: article.id,
            },
        });

        return {...article, isBookmarked: true};
    }

    async getBookmarks(userId: number) {
        return prisma.bookmark.findMany({
            where: {
                userId: userId,
            },
            include: {
                article: true,
            },
        });
    }

}