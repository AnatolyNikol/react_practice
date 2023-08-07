import {Clock} from "../components/Clock/Clock";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Clock> = {
    title: 'Studying/Clock',
    component: Clock,
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const ClockWithUseEffect: Story = {};