import { FormControlLabel, FormHelperText, Stack } from "@mui/material";
import Radio from "@mui/material/Radio";
import { action } from "@storybook/addon-actions";
import "./index.css";

const Buttons = ({ ...props }) => {
  const handleClick = action(`${props.label} clicked`);

  return (
    <Stack className="stack">
      <FormControlLabel
        value={props.value}
        control={<Radio />}
        label={props.label}
        onClick={handleClick}
      />

      <FormHelperText style={{ color: "red" }}>{props.helper}</FormHelperText>
    </Stack>
  );
};

export default Buttons;
