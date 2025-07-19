import type { Meta, StoryObj } from "@storybook/react";
import { Infobox } from ".";

const meta: Meta<typeof Infobox> = {
  title: "Components/Infobox",
  component: Infobox,
};

export default meta;

type Story = StoryObj<typeof Infobox>;

export const Default: Story = {
  args: {
    content: "Content",
    className: {},
    erikaPlant: "/img/erika-plant-1.png",
    colorCodingClassName: {},
  },
};
