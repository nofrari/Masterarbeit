import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    accordionTitle: "Title",
    accordionDetails: "Details",
    open: true,
    closed: true,
    className: {},
  },
};
