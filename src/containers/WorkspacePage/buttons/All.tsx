import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { DefaultButton } from "./Default";

const Button = styled(DefaultButton)`
    color: ${Color.darkBlue};
    background-color: rgb(234, 236, 245);
`;

const All = () => {
    return (
        <Button><span>All</span></Button>
    );
}

export default All;