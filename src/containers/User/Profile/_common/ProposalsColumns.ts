import { GridColDef } from "@material-ui/data-grid";

export const proposalsColumns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150, editable: false },
    { field: 'entity', headerName: 'Entity', width: 150, editable: false },
    { field: 'location', headerName: 'Location', width: 150, editable: false },
    { field: 'expertise', headerName: 'expertise', width: 150, editable: false },
    { field: 'date', headerName: 'date', width: 150, editable: false, type: 'date'},
    { field: 'firm', headerName: 'firm', width: 150, editable: false },
];