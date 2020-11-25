export interface IArticle {
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    imageURL: string;
    comments: string[],
    creator: string;
    likes: string[];
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: number
}