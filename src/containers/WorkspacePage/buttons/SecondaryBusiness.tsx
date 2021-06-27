import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: rgb(242, 229, 196);
    color: rgb(218, 172, 59);
`;

const SecondaryBusiness = () => {
    return (
        <Button><FontAwesomeIcon icon={faBuilding}/><span>Secondary business</span></Button>
    );
}

export default SecondaryBusiness;