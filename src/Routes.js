import React from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import WithLayout from "./WithLayout";
// Available layouts
import { Main as MainLayout } from "./layouts";

// Landing pages
import { Home as HomeView } from "./views/landingPages";
import { Contact as ContactView } from "./views/ContactPages";
import {
  FastPDashboard as FastPDashboardView,
  NetflixProject as NetflixProjectView,
  ProteomicsVisualizer as ProteomicsVisualizerView,
} from "./views/Projects";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/Contact"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ContactView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/Fastp"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={FastPDashboardView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/Proteomics"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NetflixProjectView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/Proteomics-visualizer"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ProteomicsVisualizerView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
