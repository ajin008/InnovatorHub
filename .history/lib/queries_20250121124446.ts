import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(query:`*[_type == "startup" && defined(slug.current)] | order({
    _id,
    title,
    slug,
    _createdAt,
    author ->{
      _id,name,image,bio  
     }
    views,
    description,
    category,
    image
    }`);