import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Elements from "./Elements";
import { IsUserLoggedIn } from "../../helpers/User";

const SidebarWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 0 32px;
`;

export default function Sidebar() {
    const isLoggedIn = IsUserLoggedIn();

    return (
        <SidebarWrapper>
            {
                isLoggedIn ?
                    <>
                        <ProfileCard />
                        <br />
                    </> : null
            }
            <Elements />
        </SidebarWrapper>
    );
}