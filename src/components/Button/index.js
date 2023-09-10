import * as React from "react";
import { ButtonContainer } from "../../styles/buttons";
import { Stack } from "@mui/material";

export default function Buttons({ label, onClick }) {
  return (
    <Stack width={"100%"} margin={0.4} maxWidth={440}>
      <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    </Stack>
  );
}
