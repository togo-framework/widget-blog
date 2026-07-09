import type { Meta, StoryObj } from "@storybook/react";
import { Blog } from "./index";

const meta = { title: "Widgets/Blog", component: Blog } satisfies Meta<typeof Blog>;
export default meta;

export const Default: StoryObj<typeof Blog> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Blog> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
