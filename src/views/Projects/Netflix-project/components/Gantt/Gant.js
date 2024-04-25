import React, { Component } from "react";
import Chart from "react-google-charts";
const ganttChartData = [
  [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ],
  [
    "Bugs",
    "Fix Bugs",
    new Date(2024, 3, 22),
    new Date(2024, 4, 12),
    null,
    20,
    null,
  ],
  [
    "Proteins",
    "Protein Analysis",
    new Date(2024, 3, 22),
    new Date(2024, 4, 10),
    null,
    5,
    null,
  ],
  [
    "Display",
    "Protein Description",
    new Date(2024, 3, 29),
    new Date(2024, 4, 6),
    null,
    10,
    "Proteins",
  ],
  [
    "Interactome",
    "Interactome",
    new Date(2024, 4, 6),
    new Date(2024, 4, 24),
    null,
    0,
    null,
  ],
  [
    "PCA",
    "PCA",
    new Date(2024, 5, 2),
    new Date(2024, 5, 10),
    null,
    0,
    "Proteins",
  ],
  [
    "Family",
    "Family proteins",
    new Date(2024, 3, 22),
    new Date(2024, 3, 26),
    null,
    80,
    null,
  ],
  [
    "Sunburst",
    "Sunburst Chart",
    new Date(2024, 4, 26),
    new Date(2024, 5, 2),
    null,
    0,
    null,
  ],
];

class GanttChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2>Roadmap & next Features</h2>
        <Chart
          chartType="Gantt"
          width={"100%"}
          height={"330px"}
          loader={<div>Loading Chart</div>}
          data={ganttChartData}
          rootProps={{ "data-testid": "1" }}
          options={{
            backgroundColor: {
              fill: "#2D3748",
            },
          }}
        />
      </div>
    );
  }
}
export default GanttChart;
