import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(query:`*[_type == "startup" && defined(slug.current)]{
    _id,
    title,
    slug,
    _createdAt,
    
    
    }`)