import { CollectionConfig } from 'payload/types';
import Quote from '../blocks/Quote';
import Content from '../blocks/Content';
import Alert from '../blocks/Alert';
import PrefillCategories from "./ui/PrefillCategories";
import { text } from 'express';


export const Posts:CollectionConfig = {
    slug: 'posts',
    labels: {
        singular: 'Post',
        plural: 'Posts',
    },
    admin: {

        useAsTitle: 'title_short',
    },
    access: {
        read: () => true,
    },
    fields: [

        {
            name: 'prefillCategories',
            type: 'ui',
            admin: {
                components: {
                    Field: PrefillCategories,
                }
            }
        },

        {
            name: 'title_short',
            label: 'Title overview',
            type: 'text',
            required: true,
        },
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
            minLength: 40,
        },
        {
            name: 'keywords',
            label: 'Keywords',
            type: 'text',
        },

        {
            name: 'category',
            label: 'Category',
            type: 'relationship',
            required: true,
            relationTo: 'categories',

        },
        {
            name: 'postImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
    ],
};

export default Posts;