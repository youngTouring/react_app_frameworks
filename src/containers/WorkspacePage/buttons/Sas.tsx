import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: rgb(204, 229, 204);
    color: rgb(63, 148, 63);
`;

const Sas = () => {
    return (
        <Button><FontAwesomeIcon icon={faBuilding}/><span>SAS</span></Button>
    );
}

export default Sas;