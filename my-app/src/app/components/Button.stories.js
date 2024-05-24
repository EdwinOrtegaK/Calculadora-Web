import React from 'react';
import Button from '../components/Button';
import css from '../globals.css'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    value: { control: 'text' },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '7',
  className: 'button-class',
};

export const Clickable = Template.bind({});
Clickable.args = {
  value: '7',
  className: 'button-class',
  onClick: () => alert('Button clicked!'),
};