import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    isLoading: {
      description: 'Hiển thị icon loading'
    },
    children: {
      description: 'Nội dung button',
      table: { type: { summary: 'React.ReactNode' }, defaultValue: { summary: '' } }
    },
    className: {
      description: 'class',
      table: { type: { summary: 'string' }, defaultValue: { summary: '' } }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Đăng nhập',
  className:
    'flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600',
  isLoading: true
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Đăng ký',
  className:
    'inline-flex items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600',
  isLoading: true,
  disabled: true
}
