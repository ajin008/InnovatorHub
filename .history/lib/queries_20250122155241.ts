import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) React does not recognize the `asChild` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `aschild` instead. If you accidentally passed it from a parent component, remove it from the DOM element. ] | order(_createdAt desc){
    _id,
    title,
    slug,
    _createdAt,
    author ->{
      _id,name,image,bio  
    },
    views,
    description,
    category,
    image
}`);
