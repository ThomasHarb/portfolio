import * as React from "react";
import finalJson from "../../../../../data/Proteomics_data_Final.json";
import CheckIcon from "@mui/icons-material/Check";
import { MdNumbers } from "react-icons/md";
import Box from "@mui/material/Box";
import Sunburst from "../Sunburst/Sunburst";
import DataSunburst from "../../../../../data/flare-2.json";
import CirclePlot from "../CirclePlot/CirclePlot";
import HeatMap from "../Heatmap/Heatmap";
import Network from "../Network/Network";
import {
  TextField,
  MenuItem,
  Grid,
  Autocomplete,
  Typography,
} from "@mui/material";
import Treemap from "../Treemap/Treemap";
import Divider from "@mui/material/Divider";
import Sankey from "../Sankey/Sankey";
import StatBox from "../StatBox/StatBox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Hero() {
  const names = Object.keys(finalJson);
  const namesOrganism = Object.keys(finalJson.Treemap);
  const [selectedOrganisms, setSelectedOrganisms] = React.useState("");
  const [selectedAccessions, setSelectedAccessions] = React.useState([]);

  const dataNetwork = {
    nodes: [
      {
        id: "Node 1",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 2",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 3",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 4",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 5",
        height: 1,
        size: 24,
        color: "rgb(97, 205, 187)",
      },
      {
        id: "Node 0",
        height: 2,
        size: 32,
        color: "rgb(244, 117, 96)",
      },
      {
        id: "Node 1.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 1.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 2.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 3.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 4.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.0",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.1",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 5.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
    ],
    links: [
      {
        source: "Node 0",
        target: "Node 1",
        distance: 80,
      },
      {
        source: "Node 1",
        target: "Node 1.0",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.1",
        distance: 50,
      },
      {
        source: "Node 1",
        target: "Node 1.2",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 2",
        distance: 80,
      },
      {
        source: "Node 2",
        target: "Node 2.0",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.1",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.2",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.3",
        distance: 50,
      },
      {
        source: "Node 2",
        target: "Node 2.4",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 3",
        distance: 80,
      },
      {
        source: "Node 3",
        target: "Node 2",
        distance: 80,
      },
      {
        source: "Node 3",
        target: "Node 3.0",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.1",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.2",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.3",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.4",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.5",
        distance: 50,
      },
      {
        source: "Node 3",
        target: "Node 3.6",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 4",
        distance: 80,
      },
      {
        source: "Node 4",
        target: "Node 4",
        distance: 80,
      },
      {
        source: "Node 4",
        target: "Node 4.0",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.1",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.2",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.3",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.4",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.5",
        distance: 50,
      },
      {
        source: "Node 4",
        target: "Node 4.6",
        distance: 50,
      },
      {
        source: "Node 0",
        target: "Node 5",
        distance: 80,
      },
      {
        source: "Node 5",
        target: "Node 5.0",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.1",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.2",
        distance: 50,
      },
      {
        source: "Node 5",
        target: "Node 5.3",
        distance: 50,
      },
    ],
  };

  const dataSankey = {
    nodes: [
      {
        id: "Eukaryota",
        nodeColor: "hsl(184, 70%, 50%)",
      },
      {
        id: "Bacteria",
        nodeColor: "hsl(184, 70%, 50%)",
      },
      {
        id: "Eukaryote",
        nodeColor: "hsl(184, 70%, 50%)",
      },
      {
        id: "Homo",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Escherichia",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Pseudomonas",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Caenorhabditis",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Danio",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Drosophila",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Saccharomyces",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Arabidopsis",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "Mus",
        nodeColor: "hsl(195, 70%, 50%)",
      },
      {
        id: "homo_sapiens",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "escherichia_coli",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "pseudomonas_aeruginosa",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "caenorhabditis_elegans",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "danio_rerio",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "drosophila_melanogaster",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "\nsaccharomyces_cerevisae",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "arabidopsis_thaliana",
        nodeColor: "hsl(36, 70%, 50%)",
      },
      {
        id: "mus_musculus",
        nodeColor: "hsl(36, 70%, 50%)",
      },
    ],
    links: [
      {
        source: "Bacteria",
        target: "Escherichia",
        value: 30,
      },
      {
        source: "Escherichia",
        target: "escherichia_coli",
        value: 30,
      },
      {
        source: "Bacteria",
        target: "Pseudomonas",
        value: 30,
      },
      {
        source: "Pseudomonas",
        target: "pseudomonas_aeruginosa",
        value: 30,
      },
      {
        source: "Eukaryota",
        target: "Drosophila",
        value: 30,
      },
      {
        source: "Drosophila",
        target: "drosophila_melanogaster",
        value: 30,
      },
      {
        source: "Eukaryota",
        target: "Homo",
        value: 30,
      },
      {
        source: "Homo",
        target: "homo_sapiens",
        value: 30,
      },
      {
        source: "Eukaryota",
        target: "Mus",
        value: 30,
      },
      {
        source: "Mus",
        target: "mus_musculus",
        value: 30,
      },
      {
        source: "Eukaryota",
        target: "Saccharomyces",
        value: 30,
      },
      {
        source: "Saccharomyces",
        target: "\nsaccharomyces_cerevisae",
        value: 30,
      },
      {
        source: "Eukaryote",
        target: "Arabidopsis",
        value: 30,
      },
      {
        source: "Arabidopsis",
        target: "arabidopsis_thaliana",
        value: 30,
      },
      {
        source: "Eukaryote",
        target: "Caenorhabditis",
        value: 30,
      },
      {
        source: "Caenorhabditis",
        target: "caenorhabditis_elegans",
        value: 30,
      },
      {
        source: "Eukaryote",
        target: "Danio",
        value: 30,
      },
      {
        source: "Danio",
        target: "danio_rerio",
        value: 30,
      },
    ],
  };

  return (
    <Box m="20px">
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={4}
      >
        <Typography
          variant="h4"
          align={"center"}
          sx={{
            fontWeight: 700,
          }}
        >
          Dashboard Proteomics
        </Typography>
      </Box>
      <Grid item xs={12} sm={12} md={12} textAlign={"center"} marginBottom={2}>
        <Divider>Global overview of the results</Divider>
      </Grid>
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoColumns={"140px"}
        gap={"20px"}
      >
        {/* ROW1     main: '#1a2138',
    dark: '#151a30',*/}
        <Box
          gridColumn={"span 4"}
          borderRadius={"20px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ backgroundColor: "#2c3044" }}
        >
          <StatBox
            title={finalJson.Overview.NumberOfOrganism}
            value={"Number of organisms"}
            icon={<MdNumbers />}
          ></StatBox>
        </Box>
        <Box
          gridColumn={"span 4"}
          borderRadius={"20px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ backgroundColor: "#2c3044" }}
        >
          <StatBox
            title={finalJson.Overview.NumberOfProtein}
            value={"Number of proteins"}
            icon={<MdNumbers />}
          ></StatBox>
        </Box>
        <Box
          gridColumn={"span 4"}
          borderRadius={"20px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ backgroundColor: "#2c3044" }}
        >
          <StatBox
            title={finalJson.Overview.NumberOfConditions}
            value={"Number of conditions"}
            icon={<MdNumbers />}
          ></StatBox>
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          borderRadius={"20px"}
          gridRow="span 2"
          height={"400px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{ backgroundColor: "#2c3044" }}
        >
          <Sankey data={dataSankey} />
        </Box>
      </Box>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        textAlign={"center"}
        marginBottom={2}
        marginTop={2}
      >
        <Divider>Analysis per organism</Divider>
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={2}
        alignItems="stretch"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        marginBottom={2}
      >
        <Grid item xs={6} sm={6} md={6}>
          <Autocomplete
            disableCloseOnSelect
            sx={{ m: 1, width: "60%" }}
            options={namesOrganism}
            getOptionLabel={(option) => option}
            value={selectedOrganisms}
            onChange={(event, newValue) => {
              setSelectedOrganisms(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select an organism"
                placeholder="Select organism"
              />
            )}
            renderOption={(props, option, { selected }) => (
              <MenuItem
                {...props}
                {...props}
                key={option}
                value={option}
                sx={{ justifyContent: "space-between" }}
              >
                {option}
                {selected ? <CheckIcon color="info" /> : null}
              </MenuItem>
            )}
          />
        </Grid>
        {/*         <Grid item xs={6} sm={6} md={6}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Display by groups"
            />
          </FormGroup>
        </Grid> */}
      </Grid>
      {selectedOrganisms === null ? (
        <Typography>
          Before displaying the charts, choose an organism.
        </Typography>
      ) : (
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(12, 1fr)"}
          gridAutoColumns={"140px"}
          gap={"20px"}
        >
          <Box
            gridColumn="span 6"
            gridRow="span 1"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
            borderRadius={"20px"}
            height={"360px"}
          >
            <Sunburst data={DataSunburst} height={"350px"} />
          </Box>
          <Box
            gridColumn="span 6"
            borderRadius={"20px"}
            gridRow="span 2"
            height={"1080px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
          >
            <Treemap data={finalJson.Treemap[selectedOrganisms] || {}} />
          </Box>
          <Box
            gridColumn="span 6"
            borderRadius={"20px"}
            gridRow="span 1"
            height={"700px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
          >
            <CirclePlot data={finalJson.Circledot[selectedOrganisms] || []} />
          </Box>
          {/* <Box
            gridColumn="span 6"
            borderRadius={"20px"}
            height={"360px"}
            gridRow="span 1"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
          >
            {dataPCA[selectedOrganisms] ? (
              <Scatterplot
                data={dataPCA[selectedOrganisms] || []}
                width={350}
                height={350}
              />
            ) : (
              <p>No data available for the selected organism</p>
            )}
          </Box> */}
          <Box
            gridColumn="span 12"
            borderRadius={"20px"}
            gridRow="span 2"
            height={"1200px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
          >
            <HeatMap data={finalJson.Heatmap[selectedOrganisms] || []} />
          </Box>
        </Box>
      )}
      {/* <Grid
        item
        xs={12}
        sm={12}
        md={12}
        textAlign={"center"}
        marginBottom={2}
        marginTop={2}
      >
        <Divider>Analysis per protein(s)</Divider>
      </Grid>
      <Grid item xs={12} sm={12} md={16} lg={16}>
        <Autocomplete
          sx={{ m: 1, width: 500 }}
          multiple
          options={names}
          getOptionLabel={(option) => option}
          disableCloseOnSelect
          value={selectedAccessions}
          onChange={(event, newValue) => {
            setSelectedAccessions(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Select Accession Number(s)"
              placeholder="Select Accession Number(s)"
            />
          )}
          renderOption={(props, option, { selected }) => (
            <MenuItem
              {...props}
              key={option}
              value={option}
              sx={{ justifyContent: "space-between" }}
            >
              {option}
              {selected ? <CheckIcon color="info" /> : null}
            </MenuItem>
          )}
        />
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(12, 1fr)"}
          gridAutoColumns={"140px"}
          gap={"20px"}
        >
          <Box
            gridColumn="span 6"
            borderRadius={"20px"}
            gridRow="span 3"
            height={"360px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
          >
            <Typography>{selectedAccessions}</Typography>
          </Box>
          <Box
            gridColumn="span 6"
            borderRadius={"20px"}
            gridRow="span 3"
            height={"360px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            style={{ backgroundColor: "#2c3044" }}
          >
            <Network data={dataNetwork} />
          </Box>
        </Box>
      </Grid>*/}
    </Box>
  );
}

export default Hero;

{
  /* <div>
      <Box position="relative" zIndex={2}>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={"center"}
            sx={{
              fontWeight: 700,
            }}
          >
            Dashboard Proteomics
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={12} md={12} textAlign={"center"}>
          <Divider>Global overview of the results</Divider>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Scatterplot data={dataScatter} width={400} height={400} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Sunburst data={DataSunburst} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} textAlign={"center"}>
          <Box height={"500px"} width={"100%"}>
            <Typography>
              {" "}
              Overview of all species found in the samples
            </Typography>
            <Sankey data={DataSankey} />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={12} md={12} textAlign={"center"}>
          <Divider>Analysis per species</Divider>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Autocomplete
            disableCloseOnSelect
            sx={{ m: 1, width: "25%" }}
            options={namesOrganism}
            getOptionLabel={(option) => option}
            value={selectedOrganisms}
            onChange={(event, newValue) => {
              setSelectedOrganisms(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select an organism"
                placeholder="Select organism"
              />
            )}
            renderOption={(props, option, { selected }) => (
              <MenuItem
                {...props}
                {...props}
                key={option}
                value={option}
                sx={{ justifyContent: "space-between" }}
              >
                {option}
                {selected ? <CheckIcon color="info" /> : null}
              </MenuItem>
            )}
          />
          {selectedOrganisms === null ? (
            <Typography>
              Before displaying the treemap, choose an organism
            </Typography>
          ) : (
            <div>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                marginTop={2}
                justifyContent="center"
                style={{ display: "flex", alignContent: "center" }}
              >
                <Typography>
                  Protein expression in{" "}
                  {selectedOrganisms
                    .split("_")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                marginTop={2}
                justifyContent="center"
                alignItems="center"
                style={{ display: "flex" }}
                marginLeft={8}
              >
                <Box height={"500px"} width={"100%"}>
                  <Treemap data={finalJson.Treemap[selectedOrganisms] || {}} />
                </Box>
              </Grid>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  marginTop={2}
                  justifyContent="center"
                  alignItems="center"
                  style={{ display: "flex" }}
                >
                  <Box height={"500px"} width={"100%"}>
                    <BarChart data={DataBarChart} />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  marginTop={2}
                  justifyContent="center"
                  alignItems="center"
                  style={{ display: "flex" }}
                >
                  <Box height={"500px"} width={"100%"}>
                    <HeatMap data={DataHeatmap} />
                  </Box>
                </Grid>
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    marginTop={2}
                    justifyContent="center"
                    alignItems="center"
                    style={{ display: "flex" }}
                  >
                    <Box height={"500px"} width={"100%"}>
                      <CirclePlot
                        data={finalJson.Circledot[selectedOrganisms] || []}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Divider>Analysis per protein(s)</Divider>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={12} md={6}></Grid>
        <Grid item xs={12} sm={12} md={6} textAlign={"center"}>
          <Typography>
            Protein-protein interaction network of proteine
          </Typography>
          <Box
            sx={{
              height: "500px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Network data={DataNetwork} />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              bgcolor: "purple",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Container 6
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ paddingRight: 0 }} width="100%">
          <Box
            sx={{
              bgcolor: "green",
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Container 5
          </Box>
        </Grid>
      </Grid>
      <div style={{ display: "flex", height: "500px" }}>
        <div style={{ flex: "0 0 500px", backgroundColor: "red" }}>
          Container with 500px height
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", flex: "1 1 auto" }}
        >
          <div style={{ flex: "0 0 250px", backgroundColor: "blue" }}>
            First component with 250px height
          </div>
          <div style={{ flex: "0 0 250px", backgroundColor: "green" }}>
            Second component with 250px height
          </div>
        </div>
      </div>
    </div> */
}
