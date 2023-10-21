import { Skill } from "./skill"

export type project={
    _id:string,
    title:string,
    description:string,
    MainImage:string,
    _createdAt:string,
    url:string,
    tech:Skill[]
}