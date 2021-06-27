import styled from "styled-components";

export const DefaultActionButton = styled.button`
    border: none;
    background: transparent;
    font-size: inherit;
    height: max-content;
    padding: 2px;
    color: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;

export const EditButton = styled(DefaultActionButton)``;

export const SaveButton = styled(DefaultActionButton)`
    font-size: 1.2rem;
`;

export const CloseButton = styled(DefaultActionButton)`
    font-size: 1.2rem;
`;