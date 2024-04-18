import { ResponsiveSunburst } from "@nivo/sunburst";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { colors } from "@mui/material";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Sunburst = ({ data, height }) => {
  const [selectedNode, setSelectedNode] = useState(data);
  const handleNodeClick = (node) => {
    setSelectedNode(node.data);
  };
  const reset = () => {
    setSelectedNode(data);
  };
  return (
    <Box height={height} width={"500px"} m="20px">
      <button onClick={reset}>Reset</button>
      <ResponsiveSunburst
        animate
        data={selectedNode}
        theme={{
          axis: {
            domain: false,
            ticks: false,
            legend: {
              text: {
                fill: colors.deepOrange[900],
              },
            },
          },
          text: {
            fill: colors.deepOrange[900],
          },
          tooltip: {
            container: {
              background: "#2c3044",
            },
          },
        }}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={2}
        borderColor={{ theme: "background" }}
        colors={{ scheme: "nivo" }}
        childColor={{
          from: "color",
          modifiers: [["darker", 0.1]],
        }}
        enableArcLabels={true}
        arcLabel={(e) => e.id + " (" + e.value + ")"}
        arcLabelsSkipAngle={30}
        arcLabelsTextColor="black"
        motionConfig="gentle"
        onClick={handleNodeClick}
        isInteractive={true}
        transitionMode="pushIn"
      />
    </Box>
  );
};

export default Sunburst;
