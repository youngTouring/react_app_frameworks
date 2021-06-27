import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logout } from "../../redux/actions/UserAction";
import Color from "../../shared/styleHelpers/Colors";

const LogoutContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px 0;
    margin-bottom: 4px;

    &:hover {
        cursor: pointer;
    }
`;

const Text = styled.span`
    color: ${Color.gray};
    font-weight: 900;
    padding-left: 12px;
`;

function Logout() {
    const dispatch = useDispatch();

    return (
        <LogoutContainer onClick={() => dispatch(logout())}>
            <img src="/img/icons/logout.svg" alt="logout" />
            <Text>Logout</Text>
        </LogoutContainer>
    )
}

export default Logout;