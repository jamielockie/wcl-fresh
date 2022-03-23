import React from 'react';
import { Story, Meta } from '@storybook/react';

import { KraftButton as Button } from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Kraft/Components/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  children: 'Kraft',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: false,
  disabled: true,
  children: 'Kraft',
};
