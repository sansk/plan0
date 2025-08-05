"use client";

import { useGetTeamsQuery } from "@/state/api";
import React from "react";
import { useAppSelector } from "../redux";
import Header from "@/components/Header";
import { DataGrid, FilterPanelTrigger, GridColDef } from "@mui/x-data-grid";
import { Toolbar, ToolbarButton, ExportCsv } from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import Badge from "@mui/material/Badge";

const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 200 },
  { field: "productOwnerUsername", headerName: "Product Owner", width: 200 },
  {
    field: "projectManagerUsername",
    headerName: "Project Manager",
    width: 200,
  },
];

const CustomToolbar = () => (
  <Toolbar className="toolbar flex gap-2">
    <Tooltip title="Download as CSV">
      <ExportCsv render={<ToolbarButton />}>
        <FileDownloadIcon fontSize="small" />
      </ExportCsv>
    </Tooltip>
    <Tooltip title="Filters">
      <FilterPanelTrigger
        render={(props, state) => (
          <ToolbarButton {...props} color="default">
            <Badge
              badgeContent={state.filterCount}
              color="primary"
              variant="dot"
            >
              <FilterListIcon fontSize="small" />
            </Badge>
          </ToolbarButton>
        )}
      />
    </Tooltip>
  </Toolbar>
);

const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div>Loading...</div>;
  if (isError || !teams) return <div>Error fetching teams</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={teams || []}
          columns={columns}
          pagination
          slots={{
            toolbar: CustomToolbar,
          }}
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
          showToolbar
        />
      </div>
    </div>
  );
};

export default Teams;
