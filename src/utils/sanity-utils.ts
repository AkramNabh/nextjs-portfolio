import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";


export async function getSocials(){
    const data= await client.fetch(groq`*[_type=="social"]{
        ...
    }`, { cache: 'no-store' ,next: { revalidate: 3600 }})

    return data;
} 

export async function getProfile(){
    const data= await client.fetch(groq`*[_type=="profile"][0]{
        ...,
        "image":image.asset->url,
        "socials":socials[]->
    }`,{ cache: 'no-store' ,next: { revalidate: 3600 }})
    return data;
}

export async function getAbout(){
    const data= await client.fetch(groq`*[_type=="profile"][0]{
        bio,
        "SecondImage":secondImage.asset->url,

    }`,{ cache: 'no-store' ,next: { revalidate: 3600 }})
    return data;
}

export async function getSkill(){
    const data= await client.fetch(groq`*[_type=="skill"]{
        _id,
        title,
        "image":image.asset->url
    }`, { cache: 'no-store' ,next: { revalidate: 3600 }})
    return data;
}

export async function getProjects(){
    const data=await client.fetch(groq`*[_type=="project"]{
        ...,
        "MainImage": mainImage.asset->url
    }`, { cache: 'no-store' ,next: { revalidate: 3600 }});

    return data
}

export async function getProject(_id:string){
    const data=await client.fetch(groq`*[_type=="project" && _id==$_id][0]{
        ...,
        "MainImage": mainImage.asset->url,
        tech[]->
    }`,{_id}, { cache: 'no-store' ,next: { revalidate: 3600 }})

    return data
}

export async function getPost(){
    const data=await client.fetch(groq`*[_type=="post"]{
        ...,
        "MainImage": mainImage.asset->url,
        author->
    }`, { cache: 'no-store' ,next: { revalidate: 3600 }});

    return data
}

export async function getSlug(slug:string){
    const data=await client.fetch(groq`*[_type=="post" && slug.current==$slug][0]{
        ...,
        "MainImage": mainImage.asset->url,
        author->,
        Categories[]->
    }`,{slug}, { next: { revalidate: 3600 }})

    return data
}