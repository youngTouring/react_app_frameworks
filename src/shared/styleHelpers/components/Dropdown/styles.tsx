import { Link } from "react-router-dom";
import styled from "styled-components";
import Color from "../../Colors";

export const Item = styled.div`
    display: flex;
    align-items: center;
    height: 30px;

    &:hover {
        cursor: pointer;
    }
`;
export const Image = styled.img``;

export const Text = styled.span`
    font-weight: 900;
    color: ${Color.darkBlue};
    margin-left: 12px;
`;

export const DropdownLink = styled(Link)`
    text-decoration: none;
`;