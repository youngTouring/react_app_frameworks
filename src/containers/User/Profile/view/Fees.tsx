import { DataGrid } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { feesColumns } from '../_common/FeesColumns';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../../redux/reducers';

const FeesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Fees() {

    for(let i in feesColumns){
        feesColumns[i].editable = false;
    }

    const rows = useSelector((state: IGlobalState) => state.userData?.fees);
    if (rows === undefined)
        return null;

    return (
        <FeesWrapper>
            <Label>Amount of fess</Label>
            <div style={{ minHeight: 360, width: '100%' }}>
                <DataGrid rows={rows} columns={feesColumns} hideFooter />
            </div>
        </FeesWrapper>
    );
}

export default Fees;