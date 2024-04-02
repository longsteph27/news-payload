import PrefillCompany from "./ui/PrefillCategories";

export const Projects = {
    slug: 'projects',
    labels: {
        singular: 'Project',
        plural: 'Projects',
    },
    fields: [{
        name: 'prefillCompany',
        type: 'ui',
        admin: {
            components: {
                Field: PrefillCompany
            }
        }
    },
    {
        name: 'name',
        label: 'Name',
        type: 'text',
    },
    {
        name: 'company',
        label: 'Company',
        type: 'relationship',
        relationTo: 'companies'
    }]
}