import type { Meta, StoryObj } from "@storybook/react";
import { OfferIcon } from ".";

const meta: Meta<typeof OfferIcon> = {
  title: "Components/OfferIcon",
  component: OfferIcon,
};

export default meta;

type Story = StoryObj<typeof OfferIcon>;

export const Default: Story = {
  args: {
    className: {},
    offerIcon: "/img/offer-icon.png",
  },
};
