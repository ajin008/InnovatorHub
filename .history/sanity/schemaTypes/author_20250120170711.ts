import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";

export const author = defineType(schemaDefinition:{
    name:'author',
    title:'author',
    type:'document',
    icon:'UserIcon',
    fields:[
       defineField(schemaField)
    ]
})