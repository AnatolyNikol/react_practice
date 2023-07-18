import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {Rating, ValueType} from "./Rating";
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    title: 'Example/Rating',
    component: Rating,
    // argTypes: {
    //     value: {
    //         options: [0, 1, 2, 3, 4, 5],
    //         control: {type: 'select'},
    //     },
    //     callback: {
    //         action: 'star clicked'
    //     }
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const EmptyStars: Story = {
    args: {
        value: 0,
        callback: action('star clicked')
    },
    render: ({value,callback}) => <Rating value={value} callback={callback}/>
};

export const RatingWithThreeStars: Story = {
    args: {
        value: 3,
        callback: action('star clicked')
    },
    render: ({value, callback}) => <Rating value={value} callback={callback}/>
};

const ChangeRating = () => {
    let [value, setValue] = useState<ValueType>(0)
    return <Rating value={value} callback={setValue}/>
};

export const ChangeStarRating: Story = {
    render: () => <ChangeRating />
}
