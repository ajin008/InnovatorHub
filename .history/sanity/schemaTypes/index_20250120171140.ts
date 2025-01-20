import { type SchemaTypeDefinition } from 'sanity'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType],
}
