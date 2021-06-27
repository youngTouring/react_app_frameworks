import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: #f5f5f5;
`;

const Poa = () => {
    return (
        <Button><FontAwesomeIcon icon={faClipboard}/><span>Poa</span></Button>
    );
}

export default Poa;