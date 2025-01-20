import { defineField, defineType } from "sanity";
import { UserIcon } from "lucide-react";
import { schema } from ".";

export const author = defineType(schemaDefinition:{
    name:'author',
    title:'author',
    type:'document',
    icon:'UserIcon',
    fields:[
       defineField(schema)
    ]
})