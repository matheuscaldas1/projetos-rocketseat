import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box } from '@ignite-ui/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento box</span>
      </>
    ),
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Primary: Story = {}
