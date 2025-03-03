import styled from "@emotion/styled";
import { Box, Button, FormControl, MenuItem } from "@mui/material";

export const FormContainer = styled(Box)`
  position: relative;
  width: 50%;
  padding: 3rem 2rem 2rem;
  background-color: #f8fafc;
  border-radius: 1.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const CustomFormControl = styled(FormControl)`
  margin-bottom: 1rem;
  max-height: 100px;
`;

export const CloseButtonBox = styled(Box)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  text-transform: capitalize;
  margin-top: 1rem;
`;

export const FormBox = styled(Box)`
  padding: 1rem;
  max-height: 80vh;
  overflow-y: auto;
`;

export const MenuItemContainer = styled(MenuItem)`
  height: 36px;
`;
