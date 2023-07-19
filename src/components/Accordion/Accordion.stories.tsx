import {Accordion} from "./Accordion";
import {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


const meta: Meta<typeof Accordion> = {
    title: 'Components/Accoridon',
    component: Accordion,
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Accordion>;

export const UncollapsedAccordion: Story = {
    args: {
        title: 'Menu',
        collapsed: false,
        onClick: action('collapsed true or false')
    },
    render: ({title, collapsed, onClick}) => <Accordion title={title} collapsed={collapsed} onClick={onClick}/>
};

export const CollapsedAccordion: Story = {
    args: {
        title: 'Menu',
        collapsed: true,
        onClick: action('collapsed true or false')
    },
    render: ({title, collapsed, onClick}) => <Accordion title={title} collapsed={collapsed} onClick={onClick}/>
};

const ModeSwitching = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Menu'} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
}

export const SwitchingMode: Story = {
    render: () => <ModeSwitching />
}