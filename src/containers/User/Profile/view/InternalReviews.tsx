import { DataGrid } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { internalReviewsColumns } from '../_common/InternalReviewsColumns';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../../redux/reducers';

const InternalReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function InternalReviews() {

    for(let i in internalReviewsColumns){
        internalReviewsColumns[i].editable = false;
    }

    const rows = useSelector((state: IGlobalState) => state.userData?.internalReviews);
    if (rows === undefined)
        return null;

    return (
        <InternalReviewsWrapper>
            <Label>Internal reviews</Label>
            <div style={{ minHeight: 220, width: '100%' }}>
                <DataGrid rows={rows} columns={internalReviewsColumns} hideFooter />
            </div>
        </InternalReviewsWrapper>
    );
}

export default InternalReviews;