import { CollectionConfig } from 'payload/types'

export const Pages:CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    admin: {
        useAsTitle: 'title_page',
    },
    access: {
        read: () => true,
    },
    fields:
        [
            {
                name: 'title_page',
                type: 'text',
                required: true,
            },
            {
                name: 'Posts',
                type: 'relationship',
                relationTo: 'posts',
                hasMany: true
            },
            {
                name: 'BackgroundImage',
                type: 'upload',
                relationTo: 'media',
                required: true,
            },
        ]
}

export default Pages;