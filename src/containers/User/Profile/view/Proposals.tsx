import { DataGrid } from '@material-ui/data-grid';
import { Label } from '../styles/CommonStyles';
import styled from 'styled-components';
import { proposalsColumns } from '../_common/ProposalsColumns';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../../redux/reducers';

const ProposalsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

function Proposals() {

    for(let i in proposalsColumns){
        proposalsColumns[i].editable = false;
    }

    const rows = useSelector((state: IGlobalState) => state.userData?.proposals);
    if (rows === undefined)
        return null;

    return (
        <ProposalsWrapper>
            <Label>Proposals</Label>
            <div style={{ minHeight: 214, width: '100%' }}>
                <DataGrid rows={rows} columns={proposalsColumns} hideFooter />
            </div>
        </ProposalsWrapper>
    );
}

export default Proposals;