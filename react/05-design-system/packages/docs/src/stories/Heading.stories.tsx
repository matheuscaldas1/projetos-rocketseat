import { ComponentProps, ElementType } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Heading } from '@ignite-ui/react'

interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
}

export default meta
type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
