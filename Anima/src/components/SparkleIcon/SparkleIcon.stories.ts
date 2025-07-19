import type { Meta, StoryObj } from "@storybook/react";
import { SparkleIcon } from ".";

const meta: Meta<typeof SparkleIcon> = {
  title: "Components/SparkleIcon",
  component: SparkleIcon,
};

export default meta;

type Story = StoryObj<typeof SparkleIcon>;

export const Default: Story = {
  args: {
    className: {},
  },
};
