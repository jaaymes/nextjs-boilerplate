import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './button';

export default {
  title: 'Components/ui/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export const Default: StoryObj<ButtonProps> = {
  render: (args) => {
    document.querySelector('body')?.classList.remove('dark');
    return <Button {...args} />;
  },
  args: {
    onClick: () => alert('Button clicked'),
    children: 'Button',
    size: 'lg',
    variant: 'default',
  },
};

export const Dark: StoryObj<ButtonProps> = {
  render: (args) => {
    document.querySelector('body')?.classList.add('dark');
    return <Button {...args} />;
  },
  args: {
    onClick: () => alert('Button clicked'),
    children: 'Button',
    size: 'lg',
    variant: 'default',
  },
};
