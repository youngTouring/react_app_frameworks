import { DataGrid, GridEditCellPropsParams, GridRowsProp } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { internalReviewsColumns } from '../_common/InternalReviewsColumns';

const InternalReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

interface IProps {
    items: GridRowsProp,
    onChange: (items: GridRowsProp) => void
}

function InternalReviewsEdit(props: IProps) {

    for (let i in internalReviewsColumns) {
        internalReviewsColumns[i].editable = true;
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
        <InternalReviewsWrapper>
            <Label>Internal reviews</Label>
            <div style={{ minHeight: 220, width: '100%' }}>
                <DataGrid rows={props.items} columns={internalReviewsColumns} hideFooter onEditCellChangeCommitted={(params) => handleChange(params)} />
            </div>
        </InternalReviewsWrapper>
    );
}

export default InternalReviewsEdit;