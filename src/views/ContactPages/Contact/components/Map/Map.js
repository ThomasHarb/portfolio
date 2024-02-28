/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Map = ({ themeMode = "light" }) => {
  return (
    <Box>
      <Box>
        {/*         <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"textSecondary"}
        >
          Contact me
        </Typography> */}
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
            }}
          >
            Contact Me
          </Typography>
        </Box>
        {/*         <Box>
          <Typography variant="h6" color={"textSecondary"}>
            I'd love to talk about how I can help you.
          </Typography>
        </Box> */}
      </Box>
      <Box marginY={4}>
        <Box
          component={"iframe"}
          borderRadius={2}
          minHeight={400}
          width="100%"
          height="100%"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Strasbourg&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          sx={{
            filter:
              themeMode === "dark" ? "grayscale(0.5) opacity(0.7)" : "none",
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={"body1"}
            gutterBottom
            sx={{ fontWeight: "medium" }}
          >
            Call me:
          </Typography>
          <Typography variant={"subtitle1"}>+33 6 86 52 39 49</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={"body1"}
            gutterBottom
            sx={{ fontWeight: "medium" }}
          >
            Email me:
          </Typography>
          <Typography variant={"subtitle1"}>
            thomas.harbonnier@thomasharb.net
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={"body1"}
            gutterBottom
            sx={{ fontWeight: "medium" }}
          >
            Address:
          </Typography>
          <Typography variant={"subtitle1"}>67000 Strasbourg, FR</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

Map.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Map;
