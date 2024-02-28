import { Link } from "react-router-dom";
import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};
const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {
    //delete the item
    console.log(id + " has been deleted!");
    //axios.delete(`/api/${slug}/id`)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Modification",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        //take every item inside those columns and but additionally add action columns
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            //expensive to use it for each letter so i add here this, after 500 ms start searching
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[8]}
        // checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
