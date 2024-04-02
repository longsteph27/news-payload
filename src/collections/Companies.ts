import AddPostsButton from "./ui/AddPostsButton";

export const Companies = {
    slug: 'companies',
    labels: {
        singular: 'Company',
        plural: 'Companies',
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'addPostsButton',
            type: 'ui',
            admin: {
                components: {
                    Field: AddPostsButton
                }
            }
        },
        {
            name: 'name',
            label: 'Name',
            type: 'text',
        }
    ]
}
