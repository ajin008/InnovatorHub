import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title(title:"Content")
    .items( items:[
      S.documentTypeListItem(typeName:'author').title(title:'Authors')
    ]);
