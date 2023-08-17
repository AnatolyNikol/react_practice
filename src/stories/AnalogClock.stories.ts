import {Meta, StoryObj} from "@storybook/react";
import {AnalogClock} from "../components/AnalogClock/AnalogClock";

const meta: Meta<typeof AnalogClock> = {
    title: 'Studying/AnalogClock',
    component: AnalogClock,
};

export default meta;
type Story = StoryObj<typeof AnalogClock>;

export const AnalogWithUseEffect: Story = {};