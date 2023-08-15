import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@ignite-ui/react'

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Big: Story = {
  args: {
    sizes: 'big',
  },
}

// export default {
//   title: 'Button',
//   componente: Button,
// } as Meta

// export const Primary: StoryObj = {}
