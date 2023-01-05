import {CollectionConfig} from 'payload/types';
import slug from '../fields/slug';
import meta from '../fields/meta';


const Study: CollectionConfig = {
    slug: 'studies',
    fields: [
        {
            type:'text',
            name:'title',
            label: 'Title',
            required: true,
        },
        {
            name: 'featuredImage',
            label: 'Featured Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        {
            name: 'client',
            label: 'Client',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'location',
            label: 'Location',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'categories',
            label: 'Categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        slug,
        meta,
    ],
};

export default Study;