/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
/*import FondEcran from '../../../../../svg/sci-fi-futuriste-retro-annees-80-paysage-jeu-video-retrowave-vj-neons-vaporwave-vintage-stylise_2509.jpeg';*/
/* import ReactCardCarousel from "react-card-carousel";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { FaChartArea } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb"; */

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div id="main">
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Box display="flex" flexDirection="row" marginTop={2}>
            <Grid item container alignItems={"center"} xs={12} md={6}>
              <Box data-aos={isMd ? "fade-right" : "fade-up"}>
                <Box marginBottom={2}>
                  <Typography
                    variant="h2"
                    color="textPrimary"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Thomas Harbonnier
                    <br />{" "}
                    <Typography
                      color={"primary"}
                      component={"span"}
                      variant={"inherit"}
                    >
                      Data analyst
                    </Typography>
                    <br />
                    <Typography
                      color={"primary"}
                      component={"span"}
                      variant={"inherit"}
                    >
                      Python Developer.
                    </Typography>
                  </Typography>
                </Box>
                <Box marginBottom={3}>
                  <Typography
                    variant="h6"
                    component="p"
                    color="textSecondary"
                    sx={{ fontWeight: 400 }}
                  >
                    Developer proficient in Python development and data anlysis,
                    <br />
                    ready to empower your project with precision and expertise.
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "stretched", sm: "flex-start" }}
                  centered
                >
                  <Button
                    component={"a"}
                    variant="contained"
                    color="primary"
                    size="large"
                    href={"/Contact"}
                    target={"_blank"}
                    sx={{
                      width: "50%",
                    }}
                  >
                    Contact Me
                  </Button>
                  <Box
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    width={{ xs: "100%", md: "auto" }}
                  ></Box>
                  <Box
                    marginTop={{ xs: 2, sm: 0 }}
                    marginLeft={{ sm: 2 }}
                    width={{ xs: "100%", md: "auto" }}
                  ></Box>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
