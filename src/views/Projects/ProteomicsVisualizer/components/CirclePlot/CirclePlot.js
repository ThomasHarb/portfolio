import { colors } from "@mui/material";
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const CirclePlot = ({ data }) => (
  <ResponsiveSwarmPlot
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
    groups={["Condition I", "Condition II", "Condition III"]}
    identity="id"
    value="value"
    valueScale={{ type: "linear", min: -10, max: 10, reverse: false }}
    size={{
      key: "volume",
      values: [4, 20],
      sizes: [6, 20],
    }}
    layout="vertical"
    gap={100}
    forceStrength={9}
    simulationIterations={260}
    colors={{ scheme: "dark2" }}
    borderColor="black"
    margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
    axisBottom={{
      orient: "bottom",
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Conditions",
      legendPosition: "middle",
      legendOffset: 46,
      truncateTickAt: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 10,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Expression (log)",
      legendPosition: "middle",
      legendOffset: -76,
      truncateTickAt: 0,
    }}
    motionConfig={{
      mass: 1,
      tension: 170,
      friction: 26,
      clamp: false,
      precision: 0.01,
      velocity: 0,
    }}
  />
);

export default CirclePlot;
