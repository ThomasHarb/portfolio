import * as React from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { IoIosArrowForward } from "react-icons/io";
import Box from "@mui/material/Box";

function Success() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Add this line
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        justifyContent={"center"} // Change this line
        alignItems={"center"}
        marginBottom={4}
      >
        <Alert variant="filled" severity="success">
          Message Sent Successfully!
        </Alert>
      </Box>
      <Box
        display="flex"
        justifyContent={"center"} // Change this line
        alignItems={"center"}
        marginBottom={4}
      >
        <Button variant="contained" startIcon={<IoIosArrowForward />} href="/">
          Home
        </Button>
      </Box>
    </div>
  );
}

export default Success;
