import type { Meta, StoryObj } from "@storybook/react";

import Details from "./index";

const meta: Meta<typeof Details> = {
  title: "Components/Details",
  component: Details,
  argTypes: {
    heading: { control: "text" },
    copy: { control: "text" },
    id: { control: "text" },
    open: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Details>;

export const Basic: Story = {
  args: {
    heading: "Duis feugiat suscipit maximus. Aliquam erat volutpat.",
    copy: "Etiam quis sem auctor, laoreet libero non, pellentesque erat. Donec elit justo, dictum quis iaculis ut, placerat at eros. ",
    id: "1",
    open: true,
  },
};
