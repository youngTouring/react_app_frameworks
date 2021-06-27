import { faPollH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: white;
`;

const Survey = () => {
    return (
        <Button><FontAwesomeIcon icon={faPollH}/><span>Survey</span></Button>
    );
}

export default Survey;