import { Paper, RadioGroup, Stack } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import Buttons from "../../atoms/Button";
import { Helper_data, Lable_data } from "../../atoms/Constants";
import { Iconbuttons } from "../../atoms/IconButton";

type Data = {
  value: "visa" | "master";
  label: string;
  helper: string;
  cname: string;
};

const Visa = `${process.env.PUBLIC_URL + "/assets/visa.svg"}`;
const Master = `${process.env.PUBLIC_URL + "/assets/master.svg"}`;

export const Radios: Data[] = [
  {
    value: "visa",
    label: Lable_data,
    helper: Helper_data,
    cname: Visa,
  },
  {
    value: "master",
    label: Lable_data,
    helper: Helper_data,
    cname: Master,
  },
];

export const Cards: FC = () => {
  const [value, setValue] = useState("");
  const [helpertext, setHelpertext] = useState("");

  const handelChange = (
    event: ChangeEvent<HTMLInputElement>,
    newValue: string
  ) => {
    setValue(newValue);
    setHelpertext("Last time used: Thu, Mar 18 2023");
  };
  return (
    <Paper sx={{ width: "400px", ml: "auto", mr: "auto" }} elevation={20}>
      <Stack
        direction="column"
        justifyContent="center"
        alignContent="center"
        spacing={3}
        p={3}
        m={3}
      >
        <RadioGroup name="cards" onChange={handelChange}>
          {Radios.map((radio) => (
            <Stack direction="row" justifyContent="space-between">
              <Buttons
                label={`${radio.label} ${radio.value}`}
                value={radio.value}
                helper={helpertext}
                onChange={handelChange}
              />

              <Iconbuttons cname={radio.cname} value={radio.value} />
            </Stack>
          ))}
        </RadioGroup>
      </Stack>
    </Paper>
  );
};
