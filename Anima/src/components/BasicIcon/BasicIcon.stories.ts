import type { Meta, StoryObj } from "@storybook/react";
import { BasicIcon } from ".";

const meta: Meta<typeof BasicIcon> = {
  title: "Components/BasicIcon",
  component: BasicIcon,
};

export default meta;

type Story = StoryObj<typeof BasicIcon>;

export const Default: Story = {
  args: {
    className: {},
  },
};
