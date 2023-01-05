import { Field } from 'payload/types';

const link: Field = {
    name: 'link',
    type: 'group',
    fields: [
        {
            name: 'type',
            type: 'radio',
            defaultValue: 'page',
            options: [
                {
                    label: 'Page',
                    value: 'page',
                },
                {
                    label: 'Custom URL',
                    value: 'custom',
                },
            ],
            admin: {
                layout: 'horizontal',
            },
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    }
                },
                {
                    name: 'page',
                    label: 'Page to link to',
                    type: 'relationship',
                    relationship: 'pages',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'page',
                    }
                },
                {
                    name: 'url',
                    label: 'Custom URL',
                    type: 'text',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'custom',
                    },
                },
            ],
        },
    ],
};

export default link;