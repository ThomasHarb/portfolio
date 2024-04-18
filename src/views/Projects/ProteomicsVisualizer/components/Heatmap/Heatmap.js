import { colors } from "@mui/material";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { color } from "d3";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Heatmap = ({ data }) => (
  <ResponsiveHeatMap
    data={data}
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
    margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
    valueFormat=" >-.2s"
    enableGridX={true}
    enableGridY={true}
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: "",
      legendOffset: 46,
      truncateTickAt: 0,
    }}
    axisRight={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Proteins",
      legendPosition: "middle",
      legendOffset: 70,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Proteins",
      legendPosition: "middle",
      legendOffset: -72,
      truncateTickAt: 0,
    }}
    colors={{
      type: "quantize",
      scheme: "red_yellow_blue",
      minValue: -100000,
      maxValue: 100000,
      steps: 7,
    }}
    emptyColor="#555555"
    borderColor={{
      from: "color",
      modifiers: [["darker", "0.9"]],
    }}
    legends={[
      {
        anchor: "bottom",
        translateX: 0,
        translateY: 30,
        length: 500,
        thickness: 11,
        direction: "row",
        tickPosition: "after",
        tickSize: 4,
        tickSpacing: 3,
        tickOverlap: true,
        tickFormat: " >-.2s",
        title: "Value →",
        titleAlign: "middle",
        titleOffset: 5,
      },
    ]}
  />
);

export default Heatmap;
