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
    0,
    null,
  ],
  [
    "Proteins",
    "Analysis per protein",
    new Date(2024, 3, 22),
    new Date(2024, 4, 5),
    null,
    5,
    null,
  ],
  [
    "Display",
    "Display Descrt protein",
    new Date(2024, 3, 22),
    new Date(2024, 3, 28),
    null,
    10,
    null,
  ],
  [
    "Interactome",
    "Create Interactome",
    new Date(2024, 3, 28),
    new Date(2024, 4, 5),
    null,
    0,
    null,
  ],
  [
    "PCA",
    "Create PCA",
    new Date(2024, 4, 12),
    new Date(2024, 4, 19),
    null,
    0,
    "Proteins",
  ],
  [
    "Family",
    "Regroup proteins per family",
    new Date(2024, 4, 19),
    new Date(2024, 5, 2),
    null,
    0,
    "Proteins",
  ],
  [
    "Sunburst",
    "Modify Sunburst Chart",
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
          height={"410px"}
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
