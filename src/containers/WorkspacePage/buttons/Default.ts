import styled from "styled-components";
import { DefaultActionButton } from "../../../shared/styleHelpers/components/ActionButton";

export const DefaultButton = styled(DefaultActionButton)`
    font-weight: 900;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 12px 6px 0;
    font-size: 0.94rem;
    display: flex;
    flex-direction: row;
    white-space: nowrap;

    svg {
        margin-right: 5px;
    }
`;