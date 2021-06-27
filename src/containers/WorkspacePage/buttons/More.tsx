import styled from "styled-components";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    background-color: white;
`;

const More = () => {
    return (
        <Button><span>...</span></Button>
    );
}

export default More;