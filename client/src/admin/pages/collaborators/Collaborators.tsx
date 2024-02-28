import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./collaborators.scss";
import { collabRows } from "../../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  // { field: "id", headerName: "ID", width: 25 },
  {
    field: "avatar",
    headerName: "Photo",
    width: 65,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "first_name",
    headerName: "Prénom",
    width: 95,
  },
  {
    field: "last_name",
    headerName: "Nom",
    width: 95,
  },
  { field: "phone", headerName: "Téléphone", width: 120 },
  { field: "address", headerName: "Adresse", width: 240 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "joined_at", headerName: "Rejoint à", width: 95 },
];
const Collaborators = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="collabs">
      <div className="info">
        <h2>Collaborateurs</h2>
        <button onClick={() => setOpen(true)}>Ajouter Collaborateurs</button>
      </div>
      <DataTable columns={columns} rows={collabRows} slug="collabs" />
      {open && <Add slug="Collaborateur" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Collaborators;
