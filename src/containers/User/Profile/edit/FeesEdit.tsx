import { DataGrid, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { feesColumns } from '../_common/FeesColumns';

const FeesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

function FeesEdit(props: IProps) {

    for (let i in feesColumns) {
        feesColumns[i].editable = true;
    }

    const handleChange = (params: GridEditCellPropsParams) => {
        const items = [...props.items];
        const idToUpdate = params.id;
        const newValue = params.props.value;
        const field = params.field;

        for (let key in items) {
            let attr = items[key];
            if (idToUpdate === attr.id) {
                attr[field] = newValue;
            }
        }

        props.onChange(items)
    }

    return (
        <FeesWrapper>
            <Label>Amount of fess</Label>
            <div style={{ minHeight: 360, width: '100%' }}>
                <DataGrid rows={props.items} columns={feesColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </FeesWrapper>
    );
}

export default FeesEdit;