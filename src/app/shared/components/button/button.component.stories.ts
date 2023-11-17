import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Components/ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Save'
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Save'
  }
}

export const WithIcon: Story = {
  decorators: [
    componentWrapperDecorator(
        (story) =>
            `<app-button type="primary" label="Fire">
                <span>🔥</span>
            </app-button>`
    ),
  ]
}
