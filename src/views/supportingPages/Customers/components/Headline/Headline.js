/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.common.white,
            }}
          >
            You're in good company.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            color={theme.palette.common.white}
            sx={{
              fontWeight: 700,
            }}
          >
            Transform data into actionable insights and innovative solutions for project like yours. 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Headline;
