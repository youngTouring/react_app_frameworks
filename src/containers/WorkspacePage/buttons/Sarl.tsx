import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: rgb(237, 246, 250);
    color: rgb(85, 180, 221);
`;

const Sarl = () => {
    return (
        <Button><FontAwesomeIcon icon={faBuilding}/><span>SARL</span></Button>
    );
}

export default Sarl;