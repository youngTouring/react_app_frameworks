import { faCity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: rgb(230, 230, 230);
`;

const Communities = () => {
    return (
        <Button><FontAwesomeIcon icon={faCity}/><span>Communities</span></Button>
    );
}

export default Communities;