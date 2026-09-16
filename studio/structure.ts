import type {StructureResolver} from 'sanity/structure'

const SINGLETONS = ['profile', 'siteSettings']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Portfolio CMS')
    .items([
      S.listItem()
        .title('Profile')
        .child(
          S.document()
            .schemaType('profile')
            .documentId('profile')
            .title('Profile'),
        ),

      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes(item.getId() as string),
      ),
    ])