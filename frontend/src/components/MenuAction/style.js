import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const FormWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "#f8fafc",
}));

export const FormContainer = styled(Box)(() => ({
  backgroundColor: "#fcfcfc",
  borderRadius: "1rem",
  width: "500px",
  maxWidth: "100%",
  padding: "1.5rem",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
}));

export const MenuContainer = styled(Box)(() => ({
  marginBottom: "1rem",
  display: "grid",
  placeItems: "center",
}));

export const MenuActionItem = styled(Box)`
  width: 90%;
  text-align: center;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.8rem auto;
  cursor: pointer;
  background-image: linear-gradient(to right, #606c88, #3f4c6b);
  :hover {
    opacity: 90%;
    cursor: pointer;
  }
`;
