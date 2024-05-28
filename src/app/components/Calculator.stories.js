import React from 'react';
import Calculator from '../components/Calculator';
import '../globals.css';

export default {
  title: 'Calculator',
  component: Calculator,
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '600px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Calculator {...args} />;

export const Default = Template.bind({});
Default.args = {};
