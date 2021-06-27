import { GridColDef } from "@material-ui/data-grid";

export const feesColumns: GridColDef[] = [
    { field: 'year', headerName: 'Year', width: 150, editable: false },
    { field: 'cost_center', headerName: 'Cost center', width: 150, editable: false },
    { field: 'total_amount', headerName: 'Location', width: 150, editable: false },
    { field: 'law_firm', headerName: 'expertise', width: 150, editable: false },
];