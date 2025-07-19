import type { Meta, StoryObj } from "@storybook/react";
import { BackIcon } from ".";

const meta: Meta<typeof BackIcon> = {
  title: "Components/BackIcon",
  component: BackIcon,
};

export default meta;

type Story = StoryObj<typeof BackIcon>;

export const Default: Story = {
  args: {
    className: {},
  },
};
