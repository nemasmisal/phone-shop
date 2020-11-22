export interface IArticle {
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    imageURL: string;
    comments: Object[],
    creator: string;
    likes: Object[];
    _id: string;
    created_at: string;
    updatedAt: string;
    __v: number

}