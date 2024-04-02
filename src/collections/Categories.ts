import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import AddPostsButton from "./ui/AddPostsButton";



export const Category:CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'Categories',
        plural: 'Categories',
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
                    Field: AddPostsButton,
                }
            }
        },
        {
            name: 'name',
            label: 'Name Category',
            type: 'text',
            required: true,
        },
        
     
    ],
};

export default Category;