import type { Meta, StoryObj } from "@storybook/react";
import { ChallengeIcon } from ".";

const meta: Meta<typeof ChallengeIcon> = {
  title: "Components/ChallengeIcon",
  component: ChallengeIcon,
};

export default meta;

type Story = StoryObj<typeof ChallengeIcon>;

export const Default: Story = {
  args: {
    className: {},
  },
};
