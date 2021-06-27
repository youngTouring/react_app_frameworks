import styled from "styled-components";
import SpaceLine from "../../shared/components/SpaceLine";
import { DropdownLink } from "../../shared/styleHelpers/components/Dropdown/styles";
import Footer from "./ProfileCard/Footer";
import Info from "./ProfileCard/Info";

const Card = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 2px 3px 0px #cccccc;
    padding: 12px 0;
`;

export default function ProfileCard() {
    return (
        <Card>
            <DropdownLink to="/profile">
                <Info />
                <SpaceLine />
            </DropdownLink>
            <Footer />
        </Card>
    );
}