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
        onChange: action('collapsed true or false'),
        onClick: action('some item was clicked')
    },
    render: ({title, collapsed, onChange, onClick}) => <Accordion
        title={title}
        collapsed={collapsed}
        onChange={onChange}
        items={[
            {title: 'Salad', value: 1},
            {title: 'Meat', value: 2},
            {title: 'Tea', value: 3},
        ]}
        onClick={onClick}
    />
};

export const CollapsedAccordion: Story = {
    args: {
        title: 'Menu',
        collapsed: true,
        onChange: action('collapsed true or false'),
        onClick: action('some item was clicked')
    },
    render: ({title, collapsed, onChange, onClick}) => <Accordion title={title}
                                                                  collapsed={collapsed}
                                                                  onClick={onClick}
                                                                  items={[]}
                                                                  onChange={onChange}
    />
};

const ModeSwitching = () => {
    let [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Menu'}
                      collapsed={collapsed}
                      onChange={() => setCollapsed(!collapsed)}
                      items={[
                          {title: 'Salad', value: 1},
                          {title: 'Meat', value: 2},
                          {title: 'Tea', value: 3},
                      ]}
                      onClick={action('some item was clicked')}
    />
}

export const SwitchingMode: Story = {
    render: () => <ModeSwitching/>
}