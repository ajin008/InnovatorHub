import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const author = defineType(schemaDefinition:{
    name:'author',
    title:'author',
    type:'document',
    icon:'UserIcon',
    fields:[
       defineField(schemaField:{
        name:'id',
        type:'number',
       }),
       defineField(schemaField:{
        name:'name',
        type:'string',
       }),
       defineField(schemaField:{
        name:'username',
        type:'string',
       }),
       defineField(schemaField:{
        name:'email',
        type:'string',
       }),
       defineField(schemaField:{
        name:'img',
        type:'url',
       }),
       defineField(schemaField:{
        name:'bio',
        type:'text',
       }),
       
    ],
    preview
})