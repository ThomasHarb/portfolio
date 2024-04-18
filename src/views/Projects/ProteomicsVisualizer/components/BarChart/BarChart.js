import { ResponsiveBar } from "@nivo/bar";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarChart = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    keys={["2308", "16M", "16MWDC", "PER"]}
    indexBy="condition"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "RPOD_AGRFC",
        },
        id: "dots",
      },
      {
        match: {
          id: "CH60_AGRFC",
        },
        id: "lines",
      },
    ]}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", "3"]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "condition",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "value",
      legendPosition: "middle",
      legendOffset: -40,
      truncateTickAt: 0,
    }}
    enableTotals={true}
    totalsOffset={15}
    labelSkipWidth={12}
    labelSkipHeight={20}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", "3"]],
    }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
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
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ": " + e.formattedValue + " in condition: " + e.indexValue
    }
  />
);

export default BarChart;
