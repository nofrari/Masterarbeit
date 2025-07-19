import type { Meta, StoryObj } from "@storybook/react";
import { ToogleSwitch } from ".";

const meta: Meta<typeof ToogleSwitch> = {
  title: "Components/ToogleSwitch",
  component: ToogleSwitch,
};

export default meta;

type Story = StoryObj<typeof ToogleSwitch>;

export const Default: Story = {
  args: {
    className: {},
  },
};
