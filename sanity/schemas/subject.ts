import { defineField, defineType } from "sanity";
import blockContent from "./blockContent";

export default defineType({
    name:'subject',
    title:'Subject',
    type:'document',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string',
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'string'
        }),
        defineField({
            name:'mainImage',
            title:'MainImage',
            type:'image',
            options:{
                hotspot:true
            }
        }),
        defineField({
            name:'tech',
            title:'Tech',
            type:'array',
            of: [{type:'reference', to:{type:'skill'}}]
        })
        ,
        defineField({
            name:'recievedat',
            title:'RecievedAt',
            type:'string',
        })
    ]
})