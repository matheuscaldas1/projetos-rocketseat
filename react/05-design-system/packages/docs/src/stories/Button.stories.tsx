import React, { ComponentProps, ElementType } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

const meta: Meta<ButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
