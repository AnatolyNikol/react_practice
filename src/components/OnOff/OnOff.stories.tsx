import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {useState} from "react";
import {OnOff} from "./OnOff";

const meta: Meta<typeof OnOff> = {
    title: 'Example/OnOff',
    component: OnOff,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OnOff>;

export const IsOn: Story = {
    args: {
        isOn: true,
        onClick: action('on or off clicked')
    },
    render: ({isOn,onClick}) => <OnOff isOn={isOn} onClick={onClick}/>
};

export const IsOff: Story = {
    args: {
        isOn: false,
        onClick: action('on or off clicked')
    },
    render: ({isOn,onClick}) => <OnOff isOn={isOn} onClick={onClick}/>
};


const SwitchValue = () => {
    let [on, setOn] = useState(true)
    return <OnOff isOn={on} onClick={setOn}/>
};

export const Switching: Story = {
    render: () => <SwitchValue />
}
