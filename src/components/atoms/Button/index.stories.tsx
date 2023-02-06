import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Stack } from "@mui/system";
import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { theme } from "../../../themes/index";
import { Card_no, Helper } from "../Constants";
import { Iconbuttons } from "../IconButton/index";
import Buttons from "./index";

const Visa = `${process.env.PUBLIC_URL + "/assets/visa.svg"}`;
const Master = `${process.env.PUBLIC_URL + "/assets/master.svg"}`;

export default {
  title: "Payment Card",
  component: Buttons,
  argTypes: {
    label: {
      control: { type: "select" },
      options: [
        "Ending with no : ...2323",
        "Ending with no : ...7575",
        "Ending in : ...7987",
      ],
    },
    helper: {
      control: { type: "select" },
      options: ["Last time used: Thu, Mar 18 2023"],
    },
    cname: {
      options: [Visa, Master, null],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Buttons>;

const template: ComponentStory<typeof Buttons> = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="row" justifyContent="center">
        <Buttons {...args} />
        <Iconbuttons {...args} />
      </Stack>
    </ThemeProvider>
  );
};

export const Card = template.bind({});
Card.args = {
  label: Card_no,
  helper: Helper,
  cname: Visa,
  handleClick: action("clicked"),
};
