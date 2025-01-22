import { defineField, defineType } from "sanity";


export const author = defineType(schemaDefinition:{
    name:"Startup",
    title:'Startup',
    type:'document',
    fields:[
        defineField(schemaField:{
            name:'title',
            type:'string',
        }),
       defineField(schemaField:{
        name:'slug',
        type:'slug',
        options:{
            source:'title'
        }
       }),
       ,
       defineField(schemaField:{
        name:'author',
        type:'reference',
        to:{type:'author'}
       }),
       defineField(schemaField:{
        name:'views',
        type:'string',
       }),
       defineField(schemaField:{
        name:'img',
        type:'url',
       }),
       defineField(schemaField:{
        name:"bio",
        type:'text',
       }),
       
    ],
    preview:{
        select:{
            title:"name",
        },
    },
})