import type { Meta, StoryObj } from "@storybook/react";
import { WorkshopIcon } from ".";

const meta: Meta<typeof WorkshopIcon> = {
  title: "Components/WorkshopIcon",
  component: WorkshopIcon,
};

export default meta;

type Story = StoryObj<typeof WorkshopIcon>;

export const Default: Story = {
  args: {
    className: {},
    workshopIcon: "/img/workshop-icon.png",
  },
};
