import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const Scatterplot = ({ data /* see data tab */ }) => (
  <ResponsiveScatterPlot
    data={data}
    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
    xScale={{ type: "linear", min: -10, max: "auto" }}
    xFormat=">-.2f"
    yScale={{ type: "linear", min: -10, max: "auto" }}
    yFormat=">-.2f"
    blendMode="multiply"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "PCA1",
      legendPosition: "middle",
      legendOffset: 46,
      truncateTickAt: 0,
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "PCA2",
      legendPosition: "middle",
      legendOffset: -60,
      truncateTickAt: 0,
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 130,
        translateY: 0,
        itemWidth: 100,
        itemHeight: 12,
        itemsSpacing: 5,
        itemDirection: "left-to-right",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Scatterplot;
