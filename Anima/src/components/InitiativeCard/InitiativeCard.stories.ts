import type { Meta, StoryObj } from "@storybook/react";
import { InitiativeCard } from ".";

const meta: Meta<typeof InitiativeCard> = {
  title: "Components/InitiativeCard",
  component: InitiativeCard,
};

export default meta;

type Story = StoryObj<typeof InitiativeCard>;

export const Default: Story = {
  args: {
    initiativeTitle: "Title",
    initiativeDay: "01.",
    initiativeMonthAndYear: "Jul 2025",
    initiativeTime: "17:00 - 21:00",
    initiativeLocation: "STURMFrei Werkraum",
    initiativeNumberOfDays: "Tag 3 von 7",
    registered: true,
    default1: true,
    className: {},
    defaultInitiativeClassName: {},
  },
};
