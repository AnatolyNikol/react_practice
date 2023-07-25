import {Meta, StoryObj} from "@storybook/react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";



const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Select>;

export const CustomSelect: Story = {
    args: {
        onChange: action('value changed')
    },
    render: ({onChange}) => <Select value={2}
                                    items={
                                        [
                                            {title: 'Valera', value: 1},
                                            {title: 'Sasha', value: 2},
                                            {title: 'Sveta', value: 3}
                                        ]
                                    }
                                    onChange={onChange}
    />
}

const ModeSwitching = () => {
    let [selectValue, setSelectValue] = useState(2)
    return <Select value={selectValue}
                   items={
                       [
                           {title: 'Valera', value: 1},
                           {title: 'Sasha', value: 2},
                           {title: 'Sveta', value: 3}
                       ]
                   }
                   onChange={setSelectValue}
    />
}

export const CustomSelectWithTitleChanged = {
    render: () => <ModeSwitching/>
}
