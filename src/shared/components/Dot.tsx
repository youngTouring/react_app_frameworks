import styled from "styled-components";
import Color from "../styleHelpers/Colors";

const DotBox = styled.span`
    color: ${Color.gray};
    padding: 0 6px;
    display: flex;
    align-items: center;
`;

export const Dot = () => {
    return (
        <DotBox>
            &#x2022;
        </DotBox>
    );
}