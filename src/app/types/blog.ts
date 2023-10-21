import { PortableTextBlock, Slug } from "sanity";
import { Profile } from "./Profile";
import { Category } from "./Category";

export type blog={
    _id:string,
    title:string,
    author:Profile,
    slug:Slug,
    MainImage:string,
    body:PortableTextBlock,
    publishedAt:string,
    categories:Category[],

}