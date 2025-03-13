import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./index.tsx";

const meta: Meta<typeof Hero> = {
  title: "Composites/Hero",
  component: Hero,
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Basic: Story = {
  args: {
    heading: "Hero Composite",
    subheading:
      "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit.",
    actions: [
      {
        target: "_blank",
        title: "Call to Action",
        link: "#",
      },
    ],
  },
};

export const DualCTA: Story = {
  args: {
    heading: "Hero Composite",
    subheading:
      "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit.",
    actions: [
      {
        target: "_blank",
        title: "Call to Action",
        link: "#",
      },
      {
        target: "_blank",
        title: "Call to Action",
        link: "#",
      },
    ],
  },
};

export const Promotion: Story = {
  args: {
    heading: "Hero Composite",
    subheading:
      "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit.",
    actions: [
      {
        target: "_blank",
        title: "Call to Action",
        link: "#",
      },
    ],
    promotion:
      "Ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit.",
  },
};
