import { IBase } from './base';

export interface IArticle extends IBase {
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    imageURL: string;
    comments: string[],
    creator: string;
    likes: string[];
}