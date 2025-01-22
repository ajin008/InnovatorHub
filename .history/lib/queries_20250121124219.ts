import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(query:`*[_type == "startup" && ]`)