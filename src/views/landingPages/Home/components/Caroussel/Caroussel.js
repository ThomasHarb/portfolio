import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
/* import { LuBrainCircuit } from "react-icons/lu"; */
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { FaChartArea } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdSpaceDashboard } from "react-icons/md";
import ReactCardCarousel from "react-card-carousel";
import Box from "@mui/material/Box";

function Caroussel() {
  return (
    <div
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "middle",
      }}
    >
      <ReactCardCarousel autoplay={true} autoplay_speed={3500} display={"flex"}>
        <div>
          <Card
            sx={{
              maxWidth: 343,
              borderRadius: "20px",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ minWidth: 256 }}>
              <Box
                sx={{
                  padding: `4px 24px 0`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  alt={"brand logo"}
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    transform: "translateY(50%)",
                    "& > img": {
                      margin: 0,
                      backgroundColor: "common.white",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: 60,
                      height: 60,
                    },
                  })}
                >
                  <FaChartArea />
                </Avatar>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    color: "grey.500",
                    letterSpacing: "1px",
                  }}
                >
                  Project
                </Typography>
              </Box>
              <Box
                component="hr"
                sx={(theme) => ({
                  backgroundColor: "grey.200",
                  marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                  [theme.breakpoints.up("sm")]: {
                    marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                  },
                })}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Data Analysis and visualization of Proteomics data
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
              >
                By providing visual summaries and interactive tools for data
                exploration, a proteomics dashboard empowers researchers and
                stakeholders to make informed decisions. Whether it's
                prioritizing targets for further validation, selecting
                experimental conditions, or designing follow-up studies, the
                dashboard facilitates evidence-based decision-making in
                proteomics research.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Languages and softwares used
              </Typography>
              <Typography variant="body2">
                Python - Javascript - React - Json
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Data Manipulation - Data Visualization
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/Netflix-project">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              maxWidth: 343,
              borderRadius: "20px",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ minWidth: 256 }}>
              <Box
                sx={{
                  padding: `4px 24px 0`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  alt={"brand logo"}
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    transform: "translateY(50%)",
                    "& > img": {
                      margin: 0,
                      backgroundColor: "common.white",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: 60,
                      height: 60,
                    },
                  })}
                >
                  <MdSpaceDashboard />
                </Avatar>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    color: "grey.500",
                    letterSpacing: "1px",
                  }}
                >
                  Project
                </Typography>
              </Box>
              <Box
                component="hr"
                sx={(theme) => ({
                  backgroundColor: "grey.200",
                  marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                  [theme.breakpoints.up("sm")]: {
                    marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                  },
                })}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Bioinformatic Dashboard for FastP tool
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                textAlign="justify"
              >
                By visualizing quality control metrics in a dashboard, users can
                easily identify potential sequencing errors, adapter
                contamination, or other anomalies in their data. This enables
                researchers to take appropriate corrective actions, such as
                trimming low-quality bases or filtering out contaminated reads,
                to improve the accuracy and reliability of downstream analyses.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Languages and softwares used
              </Typography>
              <Typography variant="body2">
                Javascript - React - Material UI
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Data Visualization
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/Fastp">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card
            sx={{
              maxWidth: 343,
              borderRadius: "20px",
              boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              transition: "0.3s",
            }}
          >
            <Box sx={{ minWidth: 256 }}>
              <Box
                sx={{
                  padding: `4px 24px 0`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar
                  alt={"brand logo"}
                  sx={(theme) => ({
                    width: 48,
                    height: 48,
                    transform: "translateY(50%)",
                    "& > img": {
                      margin: 0,
                      backgroundColor: "common.white",
                    },
                    [theme.breakpoints.up("sm")]: {
                      width: 60,
                      height: 60,
                    },
                  })}
                >
                  <TbBrandJavascript />
                </Avatar>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    fontSize: 14,
                    color: "grey.500",
                    letterSpacing: "1px",
                  }}
                >
                  Project
                </Typography>
              </Box>
              <Box
                component="hr"
                sx={(theme) => ({
                  backgroundColor: "grey.200",
                  marginBottom: `${24 - 1}px`, // minus 1 due to divider height
                  [theme.breakpoints.up("sm")]: {
                    marginBottom: `${30 - 1}px`, // minus 1 due to divider height
                  },
                })}
              />
            </Box>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Data Analyst Portfolio
              </Typography>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                textAlign="justify"
              >
                Create this portfolio to be able to outline my career
                highlights, notable achievements, unique skills, as well as
                endorsements. It was the unique way to learn react and express
                js frameworks while developing a full-featured application from
                scratch. It should be easy for anyone to view and understand
                what I can do as a data analyst.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <br />
                Languages and softwares used
              </Typography>
              <Typography variant="body2">
                React - Material UI - Javascript
              </Typography>
            </CardContent>
          </Card>
        </div>
      </ReactCardCarousel>
    </div>
  );
}

export default Caroussel;
