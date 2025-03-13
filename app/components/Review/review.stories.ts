import type { Meta, StoryObj } from "@storybook/react";

import Review from "./index";

const meta: Meta<typeof Review> = {
  title: "Components/Review",
  component: Review,
  argTypes: {
    copy: { control: "text" },
    author: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Review>;

export const Basic: Story = {
  args: {
    copy: "Etiam quis sem auctor, laoreet libero non, pellentesque erat. Donec elit justo, dictum quis iaculis ut, placerat at eros. ",
    author: {
      name: "John Doe",
      details: "Software Engineer",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/07/10/56/beak-5141069_1280.jpg",
    },
  },
};
