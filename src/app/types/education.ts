import { Skill } from "./skill"

export type education={
    _id:string,
    title:string,
    description:string,
    MainImage:string,
    recievedAt:string,
    url:string,
    tech:Skill[]
}