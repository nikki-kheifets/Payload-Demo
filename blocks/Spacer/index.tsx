import { Block } from 'payload/types';

const Spacer: Block = {
    slug: 'spacer',
    fields: [
        {
          name: 'size',
          label: 'Size',
          type: 'radio',
          required: true,
          defaultValue: 'medium',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
      ],
};

export default Spacer;