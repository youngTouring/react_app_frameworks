import { DataGrid, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { proposalsColumns } from '../_common/ProposalsColumns';

const ProposalsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

function ProposalsEdit(props: IProps) {

    for (let i in proposalsColumns) {
        proposalsColumns[i].editable = true;
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
        <ProposalsWrapper>
            <Label>Proposals</Label>
            <div style={{ minHeight: 214, width: '100%' }}>
                <DataGrid rows={props.items} columns={proposalsColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </ProposalsWrapper>
    );
}

export default ProposalsEdit;