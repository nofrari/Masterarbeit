import type { Meta, StoryObj } from "@storybook/react";
import { InformationIcon } from ".";

const meta: Meta<typeof InformationIcon> = {
  title: "Components/InformationIcon",
  component: InformationIcon,
};

export default meta;

type Story = StoryObj<typeof InformationIcon>;

export const Default: Story = {
  args: {
    className: {},
  },
};
