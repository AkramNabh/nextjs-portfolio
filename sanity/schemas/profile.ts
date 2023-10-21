import { defineField, defineType } from "sanity";
import blockContent from "./blockContent";

export default defineType({
    name:'profile',
    title:'Profile',
    type:'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string',
        }),
        defineField({
            name:'smallBio',
            title:'SmallBio',
            type:'string',
        }),
        defineField({
            name:'profession',
            title:'Profession',
            type:'array',
            of:[{type:'string'}]
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:'secondImage',
            title:'SecondImage',
            type:'image',
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:'bio',
            title:'Bio',
            type:'array',
            of:[{
                title:'Block',
                type:'block',
                styles:[{title:'Normal',value:'normal'}],
                lists:[],

            }]
        }),
        defineField({
            name:'socials',
            title:'Socials',
            type:'array',
            of:[{type:'reference',to:{type:'social'}}]
        })
        
    ]
})