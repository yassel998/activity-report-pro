import "./projects.scss";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import { projectRows } from "../../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
const columns: GridColDef[] = [
  //{ field: "id", headerName: "ID", width: 25 },
  { field: "projectName", headerName: "Projet", width: 200 },
  { field: "tjm", headerName: "TJM", width: 120 },
  {
    field: "status",
    headerName: "Statut",
    width: 140,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  { field: "fullname", headerName: "Collab concerné", width: 145 },
  { field: "createdAt", headerName: "Créé à", width: 95 },
  {
    field: "affect",
    headerName: "Gestion",
    width: 110,
    renderCell: () => {
      return (
        <div className="gestion">
          <div className="affect">
            <img src="/add.svg" alt="" />
          </div>
          <div
            className="disaffect"
          >
            <img src="/minus.svg" alt="" />
          </div>
        </div>
      );
    },
  },

  {
    field: "invoice",
    headerName: "Facture",
    width: 70,
    renderCell: () => {
      return (
        <div className="invoice">
          <img src="/invoice.svg" alt="" />
        </div>
      );
    },
  },
];
const Projects = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="projects">
      <div className="info">
        <h2>Projets</h2>
        <button onClick={() => setOpen(true)}>Ajouter Projets</button>
      </div>
      <DataTable columns={columns} rows={projectRows} slug="projects" />
      {open && <Add slug="projet" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Projects;
