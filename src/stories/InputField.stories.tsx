import { Meta, Story} from '@storybook/react';
import InputField, {Props} from '../components/InputField'


const meta:Meta = {
title: 'InputField',
component: InputField,
}

const Template: Story<Props> = (args) => <InputField {...args}/>

export const Default = Template.bind({})


export default meta;