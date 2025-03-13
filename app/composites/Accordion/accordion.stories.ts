import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./index.tsx";

const meta: Meta<typeof Accordion> = {
  title: "Composites/Accordion",
  component: Accordion,
  argTypes: {
    heading: { control: "text" },
    subheading: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  args: {
    heading: "Accordion Composite",
    subheading:
      "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit.",
    accordion: [
      {
        heading: "Accordion One",
        copy: "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit. Cras ac nunc non magna bibendum varius sed non nisi. ",
        open: true,
      },
      {
        heading: "Accordion Two",
        copy: "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit. Cras ac nunc non magna bibendum varius sed non nisi. ",
      },
      {
        heading: "Accordion Three",
        copy: "Sed dignissim tincidunt odio, ut imperdiet nisi varius ut. Integer auctor dolor quis nulla auctor blandit. Cras ac nunc non magna bibendum varius sed non nisi. ",
      },
    ],
  },
};
