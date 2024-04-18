import { Box, Typography } from "@mui/material";

const StatBox = ({ title, icon, value }) => {
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography variant="h5" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h6" fontStyle="italic">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
